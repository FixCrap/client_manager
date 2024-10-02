"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Link from "next/link";
import { SignupForm } from "./ui/SignupForm";

export function Home() {
	return (
		<div className='h-screen w-full rounded-md bg-neutral-950 relative items-center  flex justify-center antialiased'>
			<div className='max-w-3xl mx-auto p-4 flex-col absolute top-36 items-center'>
				<TextGenerateEffect
					className='relative z-10 mx-auto text-3xl md:text-6xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600   text-center font-sans font-bold'
					words='ΚΑΛΩΣ ΗΡΘΕΣ ΞΑΝΑ'
				/>
				<div className='relative z-30'>
					<SignupForm />
				</div>

				{/* <Link href='/choose'>
					<button className='relative md:mt-32 md:mx-auto md:ml-60  cursor-pointer   inline-flex h-12 w-32 mt-16 ml-24  md:h-16 md:w-40 overflow-hidden rounded-full p-[1px] focus:outline-o"ne focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 z-30 '>
						<span className='absolute inset-[-1000%] cursor-pointer animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
						<span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl'>
							Login
						</span>
					</button>
				</Link> */}
			</div>
			<BackgroundBeams />
		</div>
	);
}
