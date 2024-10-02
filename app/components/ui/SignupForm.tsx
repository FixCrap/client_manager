import React from "react";
import { Label } from "./label";
import { Input } from "./input";
import { cn } from "@/lib/utils";

import { login } from "@/app/login/actions";

export function SignupForm() {
	// 	const handleSubmit = (e) => {
	// 		e.preventDefault();
	// 		console.log("Form submitted");
	// 	};

	return (
		<div className='max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black/35 mt-10 border border-purple/75 '>
			<p className=' text-purple text-base max-w-sm mt-2 dark:text-neutral-300'>
				Συνδεθείτε ώστε να μπορείτε να έχετε πρόσβαση στην εφαρμογή διαχείρησης
				πελατών
			</p>
			<form
				action={login}
				className='my-8'>
				<div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4'>
					<LabelInputContainer>
						<Label htmlFor='Email'>Όνομα Χρήστη</Label>
						<Input
							id='firstname'
							name='email'
							placeholder='Όνομα Χρήστη'
							type='text'
							autoComplete='username'
							required
						/>
					</LabelInputContainer>
				</div>

				<LabelInputContainer className='mb-4'>
					<Label htmlFor='password'>Κωδικός</Label>
					<Input
						id='password'
						name='password'
						placeholder='••••••••'
						type='password'
						autoComplete='current-password'
						required
					/>
				</LabelInputContainer>

				<button
					className='bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]'
					type='submit'>
					Συνδεθείτε &rarr;
					<BottomGradient />
				</button>
			</form>
		</div>
	);
}

const BottomGradient = () => {
	return (
		<>
			<span className='group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent' />
			<span className='group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent' />
		</>
	);
};

const LabelInputContainer = ({ children, className }) => {
	return (
		<div className={cn("flex flex-col space-y-2 w-full", className)}>
			{children}
		</div>
	);
};
