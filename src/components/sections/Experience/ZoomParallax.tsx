import { useRef, useState } from 'react';
import { useScroll, useTransform, useMotionValueEvent, motion, AnimatePresence } from 'framer-motion';

interface Image {
	src: string;
	alt?: string;
}

interface ZoomParallaxProps {
	/** Array of images to be displayed in the parallax effect max 7 images */
	images: Image[];
}

// 300vh zoom phase out of 1081vh total (781vh timeline = 500vh × 1.25²)
const ZOOM_END = 300 / 1081; // ≈ 0.2775

const timelineItems = [
	{
		initials: 'MC',
		color: 'from-sky-500 to-cyan-600',
		company: 'MediaCutlet',
		years: '2019 — 2021',
		bullets: [
			"Scoped requirements directly with clients and delivered tailored WordPress solutions on tight timelines. Translated non-technical feedback into responsive, production-ready designs with cross-browser compatibility."
		],
	},
	{
		initials: 'LW',
		color: 'from-cobalt to-sky-500',
		company: 'Local Wisdom',
		years: '2019 — 2021',
		bullets: [
			"Delivered custom web applications for multiple clients using PHP and JavaScript. Managed end-to-end project delivery from client discovery through deployment, building adaptable solutions across diverse business domains.",
		],
	},
	{
		initials: 'VS',
		color: 'from-blue-500 to-grey-600',
		company: 'Volo Sports',
		years: '2021',
		bullets: [
			"Automated web testing with Cypress to improve deployment confidence and reduce manual QA overhead, establishing foundational test patterns for the engineering team.",
		],
	},
	{
		initials: 'MW',
		color: 'from-black-500 to-white-600',
		company: 'Masterworks',
		years: '2021 — 2025',
		bullets: [
			"Served as the company's first dedicated SDET; designed and built the entire automated testing infrastructure from scratch across web and mobile for an alternative investment platform serving thousands of users in a regulated fintech environment.",
			"Architected Playwright E2E test suites from zero, growing web test coverage from 0% to 80%; established Detox mobile regression testing across the React Native codebase, creating reusable test harnesses and utilities for the broader engineering team.",
		],
	},
];

const n = timelineItems.length;

export function ZoomParallax({ images }: ZoomParallaxProps) {
	const container = useRef(null);

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end end'],
	});

	// Zoom phase: scrollYProgress [0 → ZOOM_END] → scales clamp at max after that
	const scale4 = useTransform(scrollYProgress, [0, ZOOM_END], [1, 4]);
	const scale5 = useTransform(scrollYProgress, [0, ZOOM_END], [1, 5]);
	const scale6 = useTransform(scrollYProgress, [0, ZOOM_END], [1, 6]);
	const scale8 = useTransform(scrollYProgress, [0, ZOOM_END], [1, 8]);
	const scale9 = useTransform(scrollYProgress, [0, ZOOM_END], [1, 9]);

	const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

	// Timeline phase
	const timelineOpacity = useTransform(scrollYProgress, [ZOOM_END - 0.02, ZOOM_END + 0.03], [0, 1]);
	// Smooth continuous fill for the rail (0% → 100%)
	const railFillHeight = useTransform(scrollYProgress, [ZOOM_END, 1], ['0%', '100%']);

	// Snapped active index drives card content
	const [activeDot, setActiveDot] = useState(0);
	useMotionValueEvent(scrollYProgress, 'change', (v) => {
		if (v >= ZOOM_END) {
			const progress = (v - ZOOM_END) / (1 - ZOOM_END);
			setActiveDot(Math.round(progress * (n - 1)));
		}

		// Dispatch header color progress
		const fadeStart = ZOOM_END - 0.02;
		const fadeEnd = ZOOM_END + 0.03;
		const headerProgress = Math.max(0, Math.min(1, (v - fadeStart) / (fadeEnd - fadeStart)));
		window.dispatchEvent(
			new CustomEvent('header-timeline-progress', { detail: { progress: headerProgress } }),
		);
	});

	const active = timelineItems[activeDot];

	return (
		// 1081vh total: 300vh zoom + 781vh timeline
		<div ref={container} className="relative h-[1081vh] overflow-x-clip">
			<div className="sticky top-0 h-screen overflow-hidden">
				{/* Parallax images */}
				{images.map(({ src, alt }, index) => {
					const scale = scales[index % scales.length];

					return (
						<motion.div
							key={index}
							style={{ scale }}
							className={`absolute top-0 flex h-full w-full items-center justify-center ${index === 1 ? '[&>div]:!-top-[30vh] [&>div]:!left-[5vw] [&>div]:!h-[30vh] [&>div]:!w-[35vw]' : ''} ${index === 2 ? '[&>div]:!-top-[10vh] [&>div]:!-left-[25vw] [&>div]:!h-[45vh] [&>div]:!w-[20vw]' : ''} ${index === 3 ? '[&>div]:!left-[27.5vw] [&>div]:!h-[25vh] [&>div]:!w-[25vw]' : ''} ${index === 4 ? '[&>div]:!top-[27.5vh] [&>div]:!left-[5vw] [&>div]:!h-[25vh] [&>div]:!w-[20vw]' : ''} ${index === 5 ? '[&>div]:!top-[27.5vh] [&>div]:!-left-[22.5vw] [&>div]:!h-[25vh] [&>div]:!w-[30vw]' : ''} ${index === 6 ? '[&>div]:!top-[22.5vh] [&>div]:!left-[25vw] [&>div]:!h-[15vh] [&>div]:!w-[15vw]' : ''} `}
						>
							<div className="relative h-[25vh] w-[25vw]">
								<img
									src={src || '/placeholder.svg'}
									alt={alt || `Parallax image ${index + 1}`}
									className="h-full w-full object-cover"
								/>
							</div>
						</motion.div>
					);
				})}

				{/* Timeline overlay */}
				<motion.div
					style={{ opacity: timelineOpacity }}
					className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
				>
					<div className="container mx-auto px-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center pointer-events-auto">

						{/* Vertical rail timeline */}
						<div className="relative shrink-0 w-full md:w-40" style={{ height: `${(n - 1) * 64 + 16}px` }}>
							{/* Track */}
							<div className="absolute left-2 top-0 w-1 h-full bg-cobalt/20 rounded-full">
								{/* Animated fill */}
								<motion.div
									style={{ height: railFillHeight }}
									className="absolute left-0 top-0 w-full bg-link rounded-full"
								/>
							</div>

							{/* Milestone markers + labels */}
							{timelineItems.map((item, i) => {
								const top = (i / (n - 1)) * 100;
								const isCurrent = activeDot === i;
								const passed = activeDot > i;
								return (
									<div
										key={i}
										className="absolute flex items-center gap-3"
										style={{ top: `${top}%`, transform: 'translateY(-50%)' }}
									>
										<div
											className={`rounded-full transition-colors duration-300 shrink-0 ${
												isCurrent
													? 'w-3.5 h-3.5 bg-link'
													: passed
													? 'w-3 h-3 bg-cobalt'
													: 'w-3 h-3 bg-cobalt/20'
											}`}
										/>
										<span
											className={`logo-text text-[12px] whitespace-nowrap transition-colors duration-300 ${
												isCurrent
													? 'text-white'
													: passed
													? 'text-white/60'
													: 'text-white/25'
											}`}
										>
											{item.company}
										</span>
									</div>
								);
							})}
						</div>

						{/* Single card — content swaps on activeDot change */}
						<AnimatePresence mode="wait">
							<motion.div
								key={activeDot}
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -10 }}
								transition={{ duration: 0.18 }}
								className="w-full rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md p-6 flex flex-col gap-4"
							>
								{/* Avatar + meta */}
								<div className="flex items-center gap-4">
									<div
										className={`w-12 h-12 rounded-xl bg-linear-to-br ${active.color} flex items-center justify-center shrink-0 shadow-lg`}
									>
										<span className="text-sm font-bold text-white tracking-wide">
											{active.initials}
										</span>
									</div>
									<div>
										<p className="font-semibold text-white text-md leading-tight">
											{active.company}
										</p>
										<p className="text-xs text-white/40 mt-0.5">{active.years}</p>
									</div>
								</div>

								{/* Divider */}
								<div className="h-px bg-white/10" />

								{/* Bullets */}
								<ul className="flex flex-col gap-2">
									{active.bullets.map((bullet, bi) => (
										<li key={bi} className="flex gap-2 text-sm leading-relaxed">
											<span className="mt-1.5 w-1 h-1 rounded-full bg-white/30 shrink-0" />
											{bullet}
										</li>
									))}
								</ul>
							</motion.div>
						</AnimatePresence>

					</div>
				</motion.div>
			</div>
		</div>
	);
}
