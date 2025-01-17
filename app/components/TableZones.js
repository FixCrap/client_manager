"use client";

// components/DataTable.js
import React, { useState, useTransition } from "react";
import { BsFillTrash3Fill } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import Tr from "@/app/components/Tr";
import FormEditZones from "@/app/components/FormEditZones";

import {
	updateClientDVR,
	createNewClientDVR,
	deleteClientDVR,
} from "@/lib/actions";
import { useFormStatus } from "react-dom";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { CSVLink } from "react-csv";
import Link from "next/link";
import { logout } from "@/app/logout/actions";

const TableZones = ({ data }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage] = useState(10);
	const [modalOpenEdit, setModalOpenEdit] = useState(false);
	const [modalOpenCreate, setModalOpenCreate] = useState(false);
	const [currentItem, setCurrentItem] = useState(null);

	// Handle pagination
	// const indexOfLastItem = currentPage * itemsPerPage;
	// const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	// const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

	const currentItems = data;

	const handleOpenModalEdit = (item) => {
		setCurrentItem(item);
		setModalOpenEdit(true);
	};

	const handleOpenModalCreate = (item) => {
		setCurrentItem(item);
		setModalOpenCreate(true);
	};

	const handleCloseModalEdit = () => {
		setModalOpenEdit(false);
		setCurrentItem(null);
	};

	const handleCloseModalCreate = () => {
		setModalOpenCreate(false);
		setCurrentItem(null);
	};

	// const handlePageChange = (page) => {
	// 	setCurrentPage(page);
	// };

	const [isPending, startTransition] = useTransition();

	function handleDelete(id) {
		if (confirm("Σίγουρα θέλετε να διαγράψετε αυτόν τον πελάτη;"))
			startTransition(() => deleteClientDVR(id));
	}

	return (
		<div className='w-full h-screen mx-auto p-4 text-center bg-[#010112] relative py-24  '>
			<div className='flex items-center justify-between    '>
				<div
					className='flex justify-center gap-2 shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-purple 
					 dark:text-purple  rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 '>
					<div className='mr-4'>Ενέργειες: </div>

					<button
						onClick={() => handleOpenModalEdit(data)}
						className='text-blue-500 hover:text-blue-300'>
						<BsPencilSquare size={20} />
					</button>
					<button
						onClick={() => handleDelete(data.id)}
						className='ml-2 text-red-500 hover:text-red-300'>
						<BsFillTrash3Fill
							size={20}
							className={` ${isPending && "animate-pulse"}`}
						/>
					</button>
				</div>{" "}
				<h1 className='text-5xl tracking-widest font-extrabold ml-32 text-purple mb-10'>
					ΖΩΝΕΣ
				</h1>
				<div className='flex justify-center items-center  gap-2'>
					<Link
						href='/'
						className=' '>
						<button className='bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block  '>
							<span className='absolute inset-0 overflow-hidden rounded-full'>
								<span className='absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
							</span>
							<div className='relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 h-12  '>
								<span className='text-lg'>Επιστροφή</span>
								<svg
									fill='none'
									height='25'
									viewBox='0 0 24 24'
									width='25'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M10.75 8.75L14.25 12L10.75 15.25'
										stroke='currentColor'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='1.5'
									/>
								</svg>
							</div>
							<span className='absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40' />
						</button>
					</Link>

					<form
						action={logout}
						className='flex justify-end items-center '>
						<button className='bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block '>
							<span className='absolute inset-0 overflow-hidden rounded-full'>
								<span className='absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
							</span>
							<div className='relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 h-12  '>
								<span className='text-base'>Αποσύνδεση</span>
								<BiLogOut size={20} />
							</div>
							<span className='absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40' />
						</button>
					</form>

					<button
						onClick={() => handleOpenModalCreate(null)}
						className='shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-purple 
					 dark:text-purple  rounded-lg font-bold transform hover:-translate-y-1 transition duration-400'>
						Νέος Πελάτης
					</button>
				</div>
			</div>

			<table className='min-w-full border   '>
				<thead>
					<tr className='bg-black text-purple  '>
						<th className='p-2 border hidden'>ID</th>
						<th className='p-2 border'>Ζώνες</th>
						<th className='p-2 border'>Θέση που καλύπτει</th>
						<th className='p-2 border'>Χρόνος καθ/σης</th>
					</tr>
				</thead>
				<tbody>
					<Tr data={data} />
					{/* <tr className='hover:bg-gray-100/5'>
						<td className='p-2 border hidden'>{data.id}</td>
						<td className='p-2 border '>{data.zone1}</td>
						<td className='p-2 border'>{data.cover1}</td>
						<td className='p-2 border'>{data.time1}</td>
					</tr>
					<tr className='hover:bg-gray-100/5 '>
						<td className='p-2 border '>{data.zone2}</td>
						<td className='p-2 border'>{data.cover2}</td>
						<td className='p-2 border'>{data.time2}</td>
					</tr> */}
				</tbody>
			</table>

			{/* Modal for editing item */}

			{modalOpenEdit && (
				<FormEditZones
					data={data}
					handleCloseModalEdit={handleCloseModalEdit}
					setCurrentItem={setCurrentItem}
				/>
			)}

			{/* Modal for creating item */}
			{modalOpenCreate && (
				<form
					action={createNewClientDVR}
					className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50  '>
					<div className='bg-gray-800 p-5 rounded shadow-lg'>
						<h2 className='text-lg font-bold text-purple'>
							{currentItem ? "Ενημέρωση" : "Νέος Πελάτης"}
						</h2>
						<input
							type='text'
							disabled
							defaultValue={currentItem ? currentItem.id : ""}
							className='mt-2 p-2 border rounded border-purple   w-full hidden '
							placeholder='ID'
							name='id'
							onChange={(e) =>
								setCurrentItem({ ...currentItem, id: e.target.value })
							}
						/>
						<input
							type='text'
							defaultValue={currentItem ? currentItem.name : ""}
							className='mt-2 p-2 border rounded border-purple   w-full'
							placeholder='Ονοματεπώνυμο'
							name='name'
							onChange={(e) =>
								setCurrentItem({ ...currentItem, name: e.target.value })
							}
						/>
						<input
							type='text'
							defaultValue={currentItem ? currentItem.phone : ""}
							className='mt-2 p-2 border rounded w-full border-purple'
							placeholder='Τηλέφωνο'
							name='phone'
							onChange={(e) =>
								setCurrentItem({ ...currentItem, phone: e.target.value })
							}
						/>
						<input
							type='text'
							defaultValue={currentItem ? currentItem.address : ""}
							className='mt-2 p-2 border rounded w-full border-purple'
							placeholder='Διεύθυνση'
							name='address'
							onChange={(e) =>
								setCurrentItem({ ...currentItem, address: e.target.value })
							}
						/>

						<input
							type='text'
							defaultValue={currentItem ? currentItem.qr_code : ""}
							className='mt-2 p-2 border rounded w-full border-purple'
							placeholder='QR Code'
							name='qr_code'
							onChange={(e) =>
								setCurrentItem({ ...currentItem, qr_code: e.target.value })
							}
						/>
						<input
							type='text'
							defaultValue={currentItem ? currentItem.Admin_password : ""}
							className='mt-2 p-2 border rounded w-full border-purple'
							placeholder='Κωδικός Admin'
							name='Admin_password'
							onChange={(e) =>
								setCurrentItem({
									...currentItem,
									Admin_password: e.target.value,
								})
							}
						/>
						<input
							type='text'
							defaultValue={currentItem ? currentItem.guest_password : ""}
							className='mt-2 p-2 border rounded w-full border-purple'
							placeholder='Κωδικός guest'
							name='guest_password'
							onChange={(e) =>
								setCurrentItem({
									...currentItem,
									guest_password: e.target.value,
								})
							}
						/>
						<input
							type='text'
							defaultValue={currentItem ? currentItem.date : ""}
							className='mt-2 p-2 border rounded w-full border-purple'
							placeholder='Ημερομηνία Εγκατάστασης'
							name='date'
							onChange={(e) =>
								setCurrentItem({ ...currentItem, date: e.target.value })
							}
						/>
						<input
							type='text'
							defaultValue={currentItem ? currentItem.observations : ""}
							className='mt-2 p-2 border rounded w-full border-purple'
							placeholder='Παρατηρήσεις'
							name='observations'
							onChange={(e) =>
								setCurrentItem({ ...currentItem, observations: e.target.value })
							}
						/>

						<div className='flex justify-end mt-4'>
							<button
								onClick={handleCloseModalCreate}
								className='p-[3px] relative  '>
								<div className='absolute inset-0 bg-gradient-to-r from-red-500 to-purple-500 rounded-lg ' />
								<div className='px-8 py-2 h-11 bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent hover:text-purple'>
									Ακύρωση
								</div>
							</button>
							<ButtonCreate />
						</div>
					</div>
				</form>
			)}
		</div>
	);
};

//   Update Button  //

//   Create Button  //
function ButtonCreate() {
	const { pending } = useFormStatus();

	return (
		<button
			className={`inline-flex h-12  animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:text-purple ${
				pending && "animate-pulse"
			} `}
			disabled={pending}>
			{pending ? "Ενημερώνεται..." : "Δημιουργία"}
		</button>
	);
}

export default TableZones;
