import Link from 'next/link'
import Layout from '../../../components/layout'
import Header from '../../../components/header'
import Button from '../../../components/button'
import Footer from '../../../components/footer'
import React, { useStete } from 'react'

// Validation
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export default function AddHotel() {
	return (
		<Layout title="Tambah hotel" loggedIn>
			<div className="space-y-[100px]">
				<div className="px-[120px] py-[50px] flex gap-[50px]">
					<div className="py-[25px] px-[35px] w-[269px] h-min border border-[#E1E1E1] rounded-[10px]">
						<ul className="space-y-[25px]">
							<li>
								<h1 className="text-[#3D61FF] font-bold">Informasi Umum</h1>
							</li>
							<li>
								<Link href="">
									<a>Fasilitas</a>
								</Link>
							</li>
							<li>
								<Link href="">
									<a>Kamar</a>
								</Link>
							</li>
							<li>
								<Link href="">
									<a>Foto</a>
								</Link>
							</li>
							<li>
								<Link href="">
									<a>Pembayaran</a>
								</Link>
							</li>
						</ul>
					</div>

					<div className="w-full">
									<Form />
					</div>
				</div>
				<Footer />
			</div>
		</Layout>	
	)
}

function Form() {
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
            .required('checkOut is required')
    });

	const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    async function onSubmit(data) {
        // display form data on success
        // alert(JSON.stringify(data));
        console.log(data);
    }

  	const [data, setData] = React.useState();

    console.log(data);

    return (
    	<form method="post" onSubmit={handleSubmit(onSubmit)} className="space-y-[30px]">
			<div className="border border-[#E1E1E1] rounded-[10px]">
				<div className="py-[30px] px-[50px] border-b border-[#E1E1E1]">
					<h1 className="font-bold text-[20px]">Rincian Hotel</h1>
				</div>
				<div className="py-[30px] px-[50px]">

					<div>
						<div className="space-y-[10px]">
			        		<label htmlFor="name" className="text-[15px] font-bold text-primary">Nama Hotel</label>
			        		<input type="text" {...register('name')} id="name" placeholder="Masukkan nama hotel" className={`py-[20px] px-[30px] border w-full rounded-[10px] ${errors.name ? 'border-red-700' : 'border-[#E1E1E1]'}`} />
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
			        		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63308.0149794817!2d109.18040423125!3d-7.381785099999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655ff5f56abe6d%3A0x551d47055ce854ae!2sOlive%20store!5e0!3m2!1sid!2sid!4v1665293207622!5m2!1sid!2sid" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="h-[350px] w-[553px] rounded-[10px]"></iframe>
			        	</div>
			        	<div className="space-y-[10px]">
			        		<label htmlFor="phone" className="text-[15px] font-bold text-primary">No. Telepon</label>
			        		<input type="number" {...register('phone')} id="phone" placeholder="Masukkan Nomor Telepon" className={`py-[20px] px-[30px] border w-full rounded-[10px] ${errors.phone ? 'border-red-700' : 'border-[#E1E1E1]'}`} />
			                <div className="text-red-700">{errors.phone?.message}</div>
			        	</div>
			        	<div className="space-y-[10px]">
			        		<label htmlFor="checkIn" className="text-[15px] font-bold text-primary">Waktu Check-In (Mulai)</label>
			        		<input type="text" {...register('checkIn')} id="checkIn" placeholder="09:00" className={`py-[20px] px-[30px] border w-full rounded-[10px] ${errors.checkIn ? 'border-red-700' : 'border-[#E1E1E1]'}`} />
			                <div className="text-red-700">{errors.checkIn?.message}</div>
			        	</div>
			        	<div className="space-y-[10px]">
			        		<label htmlFor="checkOut" className="text-[15px] font-bold text-primary">Waktu Check-Out (Sebelum)</label>
			        		<input type="text" {...register('checkOut')} id="checkOut" placeholder="14:00" className={`py-[20px] px-[30px] border w-full rounded-[10px] ${errors.checkOut ? 'border-red-700' : 'border-[#E1E1E1]'}`} />
			                <div className="text-red-700">{errors.checkOut?.message}</div>
			        	</div>
					</div>

				</div>
			</div>
			<button>
				<Button title="Simpan dan lanjutkan" />
			</button>
		</form>
	)
}