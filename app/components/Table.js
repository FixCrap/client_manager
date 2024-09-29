"use client";

// components/DataTable.js
import React, { useState } from "react";
const DataTable = ({ data }) => {
	// const [data, setData] = useState(
	// 	[...Array(100).keys()].map((i) => ({ id: i, name: `Item ${i + 1}` }))
	// );
	const [searchTerm, setSearchTerm] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage] = useState(10);
	const [modalOpen, setModalOpen] = useState(false);
	const [currentItem, setCurrentItem] = useState(null);

	// Handle search
	const filteredData = data.filter((item) =>
		item.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	// Handle pagination
	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

	const handleOpenModal = (item) => {
		setCurrentItem(item);
		setModalOpen(true);
	};

	const handleDelete = (id) => {
		setData(data.filter((item) => item.id !== id));
	};

	const handleCloseModal = () => {
		setModalOpen(false);
		setCurrentItem(null);
	};

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	return (
		<div className='w-full mx-auto p-4 text-center'>
			<div className='flex items-center justify-between'>
				<input
					type='text'
					placeholder='Αναζήτηση...'
					className='mb-4 p-2 border rounded'
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
				<h1 className='text-4xl tracking-widest font-extrabold text-purple mb-10'>
					ΠΕΛΑΤΕΣ
				</h1>
				<button
					onClick={() => handleOpenModal(null)}
					className='mb-4 p-2 bg-blue-300/80 hover:bg-blue-300/20 text-white rounded'>
					Νέος Πελάτης
				</button>
			</div>

			<table className='min-w-full border'>
				<thead>
					<tr className='bg-black '>
						<th className='p-2 border'>ID</th>
						<th className='p-2 border'>Ονοματεπώνυμο</th>
						<th className='p-2 border'>Τηλέφωνο</th>
						<th className='p-2 border'>Διεύθυνση</th>
						<th className='p-2 border'>Τύπος Μονάδας</th>
						<th className='p-2 border'>QR Code</th>
						<th className='p-2 border '>Παρατηρήσεις</th>

						<th className='p-2  border '>Περισσότερα</th>

						<th className='p-2 border'>Ενέργειες</th>
					</tr>
				</thead>
				<tbody>
					{currentItems.map((item) => (
						<tr
							key={item.id}
							className='hover:bg-gray-100/5'>
							<td className='p-2 border'>{item.id}</td>
							<td className='p-2 border'>{item.name}</td>
							<td className='p-2 border'>{item.phone}</td>
							<td className='p-2 border'>{item.address}</td>
							<td className='p-2 border'>{item.type_of_unit}</td>

							<td className='p-2 border'>{item.qr_code}</td>
							<td className='p-2 border break-all'>{item.observations}</td>
							<td className='p-2 border'>
								<span className='hover:text-gray-400  cursor-pointer '>
									Στοιχεία →
								</span>
								{""}
								<br />
								{""}
								<span className='hover:text-gray-400 cursor-pointer'>
									Ζώνες →
								</span>
							</td>

							<td className='p-2 border'>
								<button
									onClick={() => handleOpenModal(item)}
									className='text-blue-500 hover:text-blue-300'>
									Edit
								</button>

								<button
									onClick={() => handleDelete(item.id)}
									className='ml-2 text-red-500 hover:text-red-300'>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>

			{/* Pagination */}
			<div className='flex justify-between mt-4'>
				{Array.from(
					{ length: Math.ceil(filteredData.length / itemsPerPage) },
					(_, i) => (
						<button
							key={i}
							onClick={() => handlePageChange(i + 1)}
							className={`mx-1 px-3 py-1 border ${
								currentPage === i + 1
									? "bg-blue-500 text-white"
									: "bg-black text-white"
							}`}>
							{i + 1}
						</button>
					)
				)}
			</div>

			{/* Modal for creating/editing item */}
			{modalOpen && (
				<div className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50'>
					<div className='bg-gray-800 p-5 rounded shadow-lg'>
						<h2 className='text-lg font-bold'>
							{currentItem ? "Edit Item" : "Create New Item"}
						</h2>
						<input
							type='text'
							defaultValue={currentItem ? currentItem.name : ""}
							className='mt-2 p-2 border rounded w-full'
							placeholder='Ονοματεπώνυμο'
							onChange={(e) =>
								setCurrentItem({ ...currentItem, name: e.target.value })
							}
						/>
						<input
							type='text'
							defaultValue={currentItem ? currentItem.phone : ""}
							className='mt-2 p-2 border rounded w-full'
							placeholder='Τηλέφωνο'
							onChange={(e) =>
								setCurrentItem({ ...currentItem, phone: e.target.value })
							}
						/>
						<input
							type='text'
							defaultValue={currentItem ? currentItem.address : ""}
							className='mt-2 p-2 border rounded w-full'
							placeholder='Διεύθυνση'
							onChange={(e) =>
								setCurrentItem({ ...currentItem, address: e.target.value })
							}
						/>
						<input
							type='text'
							defaultValue={currentItem ? currentItem.type_of_unit : ""}
							className='mt-2 p-2 border rounded w-full'
							placeholder='Τύπος Μονάδας'
							onChange={(e) =>
								setCurrentItem({ ...currentItem, type_of_unit: e.target.value })
							}
						/>
						<input
							type='text'
							defaultValue={currentItem ? currentItem.qr_code : ""}
							className='mt-2 p-2 border rounded w-full'
							placeholder='QR Code'
							onChange={(e) =>
								setCurrentItem({ ...currentItem, qr_code: e.target.value })
							}
						/>
						<input
							type='text'
							defaultValue={currentItem ? currentItem.observations : ""}
							className='mt-2 p-2 border rounded w-full'
							placeholder='Παρατηρήσεις'
							onChange={(e) =>
								setCurrentItem({ ...currentItem, observations: e.target.value })
							}
						/>

						<div className='flex justify-end mt-4'>
							<button
								onClick={handleCloseModal}
								className='mr-2 p-2 bg-gray-300 rounded'>
								Cancel
							</button>
							<button
								onClick={() => {
									if (currentItem) {
										setData(
											data.map((item) =>
												item.id === currentItem.id ? currentItem : item
											)
										);
									} else {
										setData([
											...data,
											{ id: data.length, name: currentItem.name },
										]);
									}
									handleCloseModal();
								}}
								className='p-2 bg-blue-500 text-white rounded'>
								{currentItem ? "Update" : "Create"}
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default DataTable;
