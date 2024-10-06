import React from "react";
import { useFormStatus } from "react-dom";

function FormEditZones({ data, handleCloseModalEdit, setCurrentItem }) {
	return (
		<form className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 '>
			<div className='bg-gray-800 p-5 rounded shadow-lg '>
				<h2 className='text-lg font-bold text-purple'>Ενημέρωση</h2>
				<input
					type='text'
					disabled
					defaultValue={data ? data.id : ""}
					className='mt-2 p-2 border rounded border-purple   w-full hidden '
					placeholder='ID'
					name='id'
					onChange={(e) => setCurrentItem({ ...data, id: e.target.value })}
				/>
				<input
					type='text'
					defaultValue={data ? data.zone1 : ""}
					className='mt-2 p-2 border rounded border-purple   w-full'
					placeholder='Ζώνη'
					name='zone1'
					onChange={(e) => setCurrentItem({ ...data, zone1: e.target.value })}
				/>
				<input
					type='text'
					defaultValue={data ? data.cover1 : ""}
					className='mt-2 p-2 border rounded w-full border-purple'
					placeholder='Θέση που καλύπτει'
					name='cover1'
					onChange={(e) => setCurrentItem({ ...data, cover1: e.target.value })}
				/>
				<input
					type='text'
					defaultValue={data ? data.time1 : ""}
					className='mt-2 p-2 border rounded w-full border-purple'
					placeholder='Χρόνος καθ/σης'
					name='time1'
					onChange={(e) => setCurrentItem({ ...data, time1: e.target.value })}
				/>

				<input
					type='text'
					defaultValue={data ? data.zone2 : ""}
					className='mt-2 p-2 border rounded border-purple   w-full'
					placeholder='Ζώνη'
					name='zone2'
					onChange={(e) => setCurrentItem({ ...data, zone2: e.target.value })}
				/>
				<input
					type='text'
					defaultValue={data ? data.cover2 : ""}
					className='mt-2 p-2 border rounded w-full border-purple'
					placeholder='Θέση που καλύπτει'
					name='cover2'
					onChange={(e) => setCurrentItem({ ...data, cover2: e.target.value })}
				/>
				<input
					type='text'
					defaultValue={data ? data.time2 : ""}
					className='mt-2 p-2 border rounded w-full border-purple'
					placeholder='Χρόνος καθ/σης'
					name='time2'
					onChange={(e) => setCurrentItem({ ...data, time1: e.target.value })}
				/>

				<input
					type='text'
					defaultValue={data ? data.zone3 : ""}
					className='mt-2 p-2 border rounded border-purple   w-full'
					placeholder='Ζώνη'
					name='zone3'
					onChange={(e) => setCurrentItem({ ...data, zone3: e.target.value })}
				/>
				<input
					type='text'
					defaultValue={data ? data.cover3 : ""}
					className='mt-2 p-2 border rounded w-full border-purple'
					placeholder='Θέση που καλύπτει'
					name='cover3'
					onChange={(e) => setCurrentItem({ ...data, cover3: e.target.value })}
				/>
				<input
					type='text'
					defaultValue={data ? data.time3 : ""}
					className='mt-2 p-2 border rounded w-full border-purple'
					placeholder='Χρόνος καθ/σης'
					name='time3'
					onChange={(e) => setCurrentItem({ ...data, time3: e.target.value })}
				/>

				<div className='flex justify-end mt-4 '>
					<button
						onClick={handleCloseModalEdit}
						className='p-[3px] relative  '>
						<div className='absolute inset-0 bg-gradient-to-r from-red-500 to-purple-500 rounded-lg ' />
						<div className='px-8 py-2 h-11 bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent hover:text-purple'>
							Ακύρωση
						</div>
					</button>

					<ButtonUpdate />
				</div>
			</div>
		</form>
	);
}

function ButtonUpdate() {
	const { pending } = useFormStatus();

	return (
		// Button code
		<button
			className={`inline-flex h-12  animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:text-purple ${
				pending && "animate-pulse"
			} `}
			disabled={pending}>
			{pending ? "Ενημερώνεται..." : "Ενημέρωση"}
		</button>
	);
}

export default FormEditZones;
