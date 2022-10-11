import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../../components/layout'
import Header from '../../../components/header'
import Button from '../../../components/button'
import AddCard from '../../../components/addCard'
import AddHotelImage from '../../../components/addHotelImage'
import Footer from '../../../components/footer'
import React, { useStete } from 'react'

// Validation
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export default function AddHotel() {
	const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Name is required'),
        address: Yup.string()
            .required('Address is required'),
        province: Yup.string()
            .required('Province is required'),
        city: Yup.string()
            .required('City is required'),
        phone: Yup.number()
		    .min(1, 'Length should be a positive non-zero integer')
            .required('Phone is required'),
        checkIn: Yup.string()
            .required('checkIn is required'),
        checkOut: Yup.string()
            .required('checkOut is required'),

        // Kamar
        room_name: Yup.string()
            .required('Room name is required'),
        room_type: Yup.string()
            .required('Room type is required'),
        capacity: Yup.number()
            .required('Capacity is required'),
        room_price: Yup.number()
            .required('Room price is required'),
        room_total: Yup.number()
            .required('Room total is required'),

        // Bank
        bank_name: Yup.string()
            .required('Bank name is required'),
        bank_no: Yup.number()
            .required('Bank no is required'),
        bank_owner: Yup.number()
            .required('Bank owner is required'),
    });

	const { register, handleSubmit, watch, formState:{ errors } } = useForm({
		resolver: yupResolver(validationSchema)
	});

	const onSubmit = data => console.log(data);

    const [menuOpen, setMenuOpen] = React.useState("Informasi Umum");
	return (
		<Layout title="Tambah hotel" loggedIn>
			<div className="space-y-[100px]">
				<div className="px-[120px] py-[50px] flex gap-[50px]">
					<div className="py-[25px] px-[35px] w-[269px] h-min border border-[#E1E1E1] rounded-[10px]">
						<ul className="space-y-[25px]">
							<li>
								<button onClick={() => setMenuOpen("Informasi Umum")} className={menuOpen == "Informasi Umum" ? "text-[#3D61FF] font-bold" : ""}>
									Informasi Umum
								</button>
							</li>
							<li>
								<button onClick={() => setMenuOpen("Fasilitas")} className={menuOpen == "Fasilitas" ? "text-[#3D61FF] font-bold" : ""}>
									Fasilitas
								</button>
							</li>
							<li>
								<button onClick={() => setMenuOpen("Kamar")} className={menuOpen == "Kamar" ? "text-[#3D61FF] font-bold" : ""}>
									Kamar
								</button>
							</li>
							<li>
								<button onClick={() => setMenuOpen("Foto")} className={menuOpen == "Foto" ? "text-[#3D61FF] font-bold" : ""}>
									Foto
								</button>
							</li>
							<li>
								<button onClick={() => setMenuOpen("Pembayaran")} className={menuOpen == "Pembayaran" ? "text-[#3D61FF] font-bold" : ""}>
									Pembayaran
								</button>
							</li>
						</ul>
					</div>

					<div className="w-full">
						<h1 className="text-[20px] font-bold mb-[30px]">{ menuOpen }</h1>

    					<form method="post" onSubmit={handleSubmit(onSubmit)}>
							{ menuOpen == "Informasi Umum" ? <InformasiUmum /> : "" }
							{ menuOpen == "Fasilitas" ? <Fasilitas /> : "" }
							{ menuOpen == "Kamar" ? <Kamar /> : "" }
							{ menuOpen == "Foto" ? <Foto /> : "" }
							{ menuOpen == "Pembayaran" ? <Pembayaran /> : "" }
						</form>
					</div>
				</div>
				<Footer />
			</div>
		</Layout>	
	)

	function InformasiUmum() {
	    return (
	    	<div className="space-y-[30px]">
				<div className="border border-[#E1E1E1] rounded-[10px]">
					<div className="py-[30px] px-[50px] border-b border-[#E1E1E1]">
						<h1 className="font-bold text-[20px]">Rincian Hotel</h1>
					</div>
					<div className="py-[30px] px-[50px]">

						<div>
							<div className="space-y-[10px]">
				        		<label htmlFor="name" className="text-[15px] font-bold text-primary">Nama Hotel</label>
				        		<input type="text" key="1" {...register('name')} id="name" placeholder="Masukkan nama hotel" className={`py-[20px] px-[30px] border w-full rounded-[10px] ${errors.name ? 'border-red-700' : 'border-[#E1E1E1]'}`} />
				                <div className="text-red-700">{errors.name?.message}</div>
				        	</div>
				        	<div className="space-y-[10px]">
				        		<label htmlFor="address" className="text-[15px] font-bold text-primary">Lokasi Hotel</label>
				        		<textarea name="address" {...register('address')} id="address" placeholder="Masukkan nama hotel" className={`py-[20px] px-[30px] border w-full h-[126px] rounded-[10px] ${errors.address ? 'border-red-700' : 'border-[#E1E1E1]'}`}>
				        		</textarea>
				                <div className="text-red-700">{errors.address?.message}</div>

				        		<input type="text" {...register('province')} id="province" placeholder="Masukkan nama hotel" className={`py-[20px] px-[30px] border w-full rounded-[10px] ${errors.province ? 'border-red-700' : 'border-[#E1E1E1]'}`} />
				                <div className="text-red-700">{errors.province?.message}</div>

				        		<input type="text" {...register('city')} id="city" placeholder="Masukkan nama hotel" className={`py-[20px] px-[30px] border w-full rounded-[10px] ${errors.city ? 'border-red-700' : 'border-[#E1E1E1]'}`} />
				                <div className="text-red-700">{errors.city?.message}</div>
				        	</div>

							<div className="my-[20px]">
								<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63308.0149794817!2d109.18040423125!3d-7.381785099999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655ff5f56abe6d%3A0x551d47055ce854ae!2sOlive%20store!5e0!3m2!1sid!2sid!4v1665293207622!5m2!1sid!2sid" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-[350px] w-[553px] rounded-[10px]"></iframe>
							</div>

				        	<div className="space-y-[10px]">
				        		<label htmlFor="phone" className="text-[15px] font-bold text-primary">No. Telepon</label>
				        		<input type="number" {...register('phone')} id="phone" placeholder="Masukkan Nomor Telepon" className={`py-[20px] px-[30px] border w-full rounded-[10px] ${errors.phone ? 'border-red-700' : 'border-[#E1E1E1]'}`} />
				                <div className="text-red-700">{errors.phone?.message}</div>
				        	</div>
				        	<div className="space-y-[10px]">
				        		<label htmlFor="checkIn" className="text-[15px] font-bold text-primary">Waktu Check-In (Mulai)</label>
				        		<input type="time" {...register('checkIn')} id="checkIn" placeholder="09:00" className={`py-[20px] px-[30px] border w-full rounded-[10px] ${errors.checkIn ? 'border-red-700' : 'border-[#E1E1E1]'}`} />
				                <div className="text-red-700">{errors.checkIn?.message}</div>
				        	</div>
				        	<div className="space-y-[10px]">
				        		<label htmlFor="checkOut" className="text-[15px] font-bold text-primary">Waktu Check-Out (Sebelum)</label>
				        		<input type="time" {...register('checkOut')} id="checkOut" placeholder="14:00" className={`py-[20px] px-[30px] border w-full rounded-[10px] ${errors.checkOut ? 'border-red-700' : 'border-[#E1E1E1]'}`} />
				                <div className="text-red-700">{errors.checkOut?.message}</div>
				        	</div>
						</div>

					</div>
				</div>
				<button type="submit">
					<Button title="Lanjutkan" disabled />
				</button>
			</div>
		)
	}

	function Fasilitas() {
	    return (
	    	<div className="space-y-[30px]">
		    	<div className="space-y-[50px]">
					<div className="border border-[#E1E1E1] rounded-[10px]">
						<div className="py-[30px] px-[50px] border-b border-[#E1E1E1]">
							<h1 className="font-bold text-[20px]">Fasilitas Umum</h1>
						</div>
						<div className="py-[30px] px-[50px]">

							<div className="space-y-[61px]">
								<div>
									<div className="flex gap-[10px]">
										<input type="checkbox" id="tempat_parkir" className="h-[25px] w-[25px] outline-red-800" />
										<label htmlFor="tempat_parkir" className="text-secondary">Tempat Parkir</label>
									</div>
								</div>
								<div>
									<div className="flex gap-[10px]">
										<input type="checkbox" id="restoran" className="h-[25px] w-[25px] outline-red-800" />
										<label htmlFor="restoran" className="text-secondary">Restoran</label>
									</div>
								</div>	
								<div>
									<div className="flex gap-[10px]">
										<input type="checkbox" id="wifi_publik" className="h-[25px] w-[25px] outline-red-800" />
										<label htmlFor="wifi_publik" className="text-secondary">Wifi Publik</label>
									</div>
								</div>
								<div>
									<div className="flex gap-[10px]">
										<input type="checkbox" id="cofee_shop" className="h-[25px] w-[25px] outline-red-800" />
										<label htmlFor="cofee_shop" className="text-secondary">Cofee Shop</label>
									</div>
								</div>
							</div>

						</div>
					</div>

					<div className="border border-[#E1E1E1] rounded-[10px]">
						<div className="py-[30px] px-[50px] border-b border-[#E1E1E1]">
							<h1 className="font-bold text-[20px]">Transportasi</h1>
						</div>
						<div className="py-[30px] px-[50px]">

							<div className="space-y-[61px]">
								<div>
									<div className="flex gap-[10px]">
										<input type="checkbox" id="antar_jemput_bandara" className="h-[25px] w-[25px] outline-red-800" />
										<label htmlFor="antar_jemput_bandara" className="text-secondary">Antar-jemput Bandara</label>
									</div>
								</div>
								<div>
									<div className="flex gap-[10px]">
										<input type="checkbox" id="shuttle_bus" className="h-[25px] w-[25px] outline-red-800" />
										<label htmlFor="shuttle_bus" className="text-secondary">Shuttle Bus</label>
									</div>
								</div>	
							</div>

						</div>
					</div>

					<div className="border border-[#E1E1E1] rounded-[10px]">
						<div className="py-[30px] px-[50px] border-b border-[#E1E1E1]">
							<h1 className="font-bold text-[20px]">Olahraga dan Hiburan</h1>
						</div>
						<div className="py-[30px] px-[50px]">

							<div className="space-y-[61px]">
								<div>
									<div className="flex gap-[10px]">
										<input type="checkbox" id="fitness" className="h-[25px] w-[25px] outline-red-800" />
										<label htmlFor="fitness" className="text-secondary">Fitness</label>
									</div>
								</div>
								<div>
									<div className="flex gap-[10px]">
										<input type="checkbox" id="kolam_renang" className="h-[25px] w-[25px] outline-red-800" />
										<label htmlFor="kolam_renang" className="text-secondary">Kolam Renang</label>
									</div>
								</div>	
								<div>
									<div className="flex gap-[10px]">
										<input type="checkbox" id="biliards" className="h-[25px] w-[25px] outline-red-800" />
										<label htmlFor="biliards" className="text-secondary">Biliards</label>
									</div>
								</div>	
								<div>
									<div className="flex gap-[10px]">
										<input type="checkbox" id="kolam_renang" className="h-[25px] w-[25px] outline-red-800" />
										<label htmlFor="kolam_renang" className="text-secondary">Kolam Renang</label>
									</div>
								</div>	
							</div>

						</div>
					</div>
				</div>

				<button type="submit">
					<Button title="Lanjutkan" />
				</button>
	    	</div>
		)
	}

	function Kamar() {
	    return (
	    	<div className="space-y-[30px]">
				<div className="border border-[#E1E1E1] rounded-[10px]">
					<div className="py-[30px] px-[50px] border-b border-[#E1E1E1]">
						<h1 className="font-bold text-[20px]">Rincian Kamar</h1>
					</div>
					<div className="py-[30px] px-[50px]">

						<div>
							<div className="space-y-[10px]">
				        		<label htmlFor="room_name" className="text-[15px] font-bold text-primary">Nama Kamar</label>
				        		<input type="text" {...register('room_name')} id="room_name" placeholder="Masukkan nama kamar" className={`py-[20px] px-[30px] border w-full rounded-[10px] ${errors.room_name ? 'border-red-700' : 'border-[#E1E1E1]'}`} />
				                <div className="text-red-700">{errors.room_name?.message}</div>
				        	</div>
							<div className="space-y-[10px]">
				        		<label htmlFor="room_type" className="text-[15px] font-bold text-primary">Jenis Kamar</label>
				        		<input type="text" {...register('room_type')} id="room_type" placeholder="Masukkan jenis kamar" className={`py-[20px] px-[30px] border w-full rounded-[10px] ${errors.room_type ? 'border-red-700' : 'border-[#E1E1E1]'}`} />
				                <div className="text-red-700">{errors.room_type?.message}</div>
				        	</div>
							<div className="space-y-[10px]">
				        		<label htmlFor="capacity" className="text-[15px] font-bold text-primary">Kapasitas Pengunjung</label>
				        		<input type="number" {...register('capacity')} id="capacity" placeholder="Pilih kapasitas" className={`py-[20px] px-[30px] border w-full rounded-[10px] ${errors.capacity ? 'border-red-700' : 'border-[#E1E1E1]'}`} />
				                <div className="text-red-700">{errors.capacity?.message}</div>
				        	</div>
							<div className="space-y-[10px]">
				        		<label htmlFor="room_price" className="text-[15px] font-bold text-primary">Harga</label>
				        		<input type="number" {...register('room_price')} id="room_price" placeholder="Masukkan harga" className={`py-[20px] px-[30px] border w-full rounded-[10px] ${errors.room_price ? 'border-red-700' : 'border-[#E1E1E1]'}`} />
				                <div className="text-red-700">{errors.room_price?.message}</div>
				        	</div>
							<div className="space-y-[10px]">
				        		<label htmlFor="room_total" className="text-[15px] font-bold text-primary">Jumlah Kamar</label>
				        		<input type="text" {...register('room_total')} id="room_total" placeholder="Masukkan jumlah kamar" className={`py-[20px] px-[30px] border w-full rounded-[10px] ${errors.room_total ? 'border-red-700' : 'border-[#E1E1E1]'}`} />
				                <div className="text-red-700">{errors.room_total?.message}</div>
				        	</div>
						</div>

					</div>
				</div>
				<button type="button">
					<Button title="Tambah" disabled />
				</button>

				<DetailKamar />

				<button type="button">
					<Button title="Lanjutkan" />
				</button>
			</div>
		)
	}

	function Foto() {
	    return (
	    	<div className="space-y-[30px]">
				<div className="border border-[#E1E1E1] rounded-[10px]">
					<div className="py-[30px] px-[50px] border-b border-[#E1E1E1]">
						<h1 className="font-bold text-[20px]">Tambahkan Foto</h1>
					</div>
					<div className="py-[50px] px-[50px]">
						<div className="grid grid-cols-2 gap-[21px] relative">
							
							<AddHotelImage image="hotel.png" />

							<button>
								<AddCard title="Tambah Foto Baru" customClass="h-[343px]" />
							</button>

						</div>
					</div>
				</div>
				<button type="submit">
					<Button title="Lanjutkan" />
				</button>
			</div>
		)
	}

	function Pembayaran() {
		
	    return (
	    	<div className="space-y-[30px]">
				<div className="border border-[#E1E1E1] rounded-[10px]">
					<div className="py-[30px] px-[50px] border-b border-[#E1E1E1]">
						<h1 className="font-bold text-[20px]">Transfer Bank</h1>
					</div>
					<div className="py-[30px] px-[50px]">

						<div>
							<div className="space-y-[10px]">
				        		<label htmlFor="bank_name" className="text-[15px] font-bold text-primary">Bank</label>
				        		<input type="text" {...register('bank_name')} id="bank_name" placeholder="Pilih Bank" className={`py-[20px] px-[30px] border w-full rounded-[10px] ${errors.bank_name ? 'border-red-700' : 'border-[#E1E1E1]'}`} />
				                <div className="text-red-700">{errors.bank_name?.message}</div>
				        	</div>
							<div className="space-y-[10px]">
				        		<label htmlFor="bank_no" className="text-[15px] font-bold text-primary">No. Rekening</label>
				        		<input type="text" {...register('bank_no')} id="bank_no" placeholder="Masukkan No. Rekening" className={`py-[20px] px-[30px] border w-full rounded-[10px] ${errors.bank_no ? 'border-red-700' : 'border-[#E1E1E1]'}`} />
				                <div className="text-red-700">{errors.bank_no?.message}</div>
				        	</div>
							<div className="space-y-[10px]">
				        		<label htmlFor="bank_owner" className="text-[15px] font-bold text-primary">Nama Pemilik</label>
				        		<input type="number" {...register('bank_owner')} id="bank_owner" placeholder="Masukkan nama pemilik rekening" className={`py-[20px] px-[30px] border w-full rounded-[10px] ${errors.bank_owner ? 'border-red-700' : 'border-[#E1E1E1]'}`} />
				                <div className="text-red-700">{errors.bank_owner?.message}</div>
				        	</div>
						</div>

					</div>
				</div>
				<button type="button">
					<Button title="Tambah" disabled />
				</button>

				<Bank />

				<button type="button">
					<Button title="Simpan dan Selesai" />
				</button>
			</div>
		)
	}
}

function DetailKamar({ data }) {
	return (
		<div className="border border-[#E1E1E1] rounded-[10px] text-primary">
			<div className="py-[30px] px-[50px] border-b border-[#E1E1E1] flex justify-between">
				<h1 className="font-bold">Kamar 1</h1>
				<button className="text-[#FE6A5F] font-bold">
					Ubah
				</button>
			</div>
			<div className="py-[30px] px-[50px] space-y-[20px]">
				<div>
					<p className="text-secondary">Jenis Kamar</p>
					<p className="font-bold">Single Bad</p>
				</div>
				<div>
					<p className="text-secondary">Kapasitas Pengunjung</p>
					<p className="font-bold">2 Orang</p>
				</div>
				<div>
					<p className="text-secondary">Harga</p>
					<p className="font-bold">Rp 1,700,000</p>
				</div>
				<div>
					<p className="text-secondary">Jumlah Kamar</p>
					<p className="font-bold">5 Kamar</p>
				</div>
			</div>
		</div>
	)
}

function Bank({ data }) {
	return (
		<div className="border border-[#E1E1E1] rounded-[10px] text-primary">
			<div className="py-[30px] px-[50px] border-b border-[#E1E1E1] flex justify-between">
				<h1 className="font-bold">Bank Negara Indonesia (BNI)</h1>
				<button className="text-[#FE6A5F] font-bold">
					Ubah
				</button>
			</div>
			<div className="py-[30px] px-[50px] space-y-[20px]">
				<div>
					<p className="text-secondary">No. Rekening</p>
					<p className="font-bold">20089321</p>
				</div>
				<div>
					<p className="text-secondary">Nama Pemilik</p>
					<p className="font-bold">PT Hotel Indonesia</p>
				</div>
			</div>
		</div>
	)
}