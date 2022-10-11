import Image from 'next/image'
import Link from 'next/link'
import Button from '../../components/button'
import Layout from '../../components/layout'

// Validation
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export default function Register() {
	return (
		<Layout title="Daftar" auth>
			<div className="grid grid-cols-2 w-screen h-full">
		        <div className="flex items-center justify-center bg-[#E4E9FF] w-full h-full">
			        <div className="relative w-[400px] h-[400px]">
			            <Image 
			            	src="/images/lr.png" 
			            	alt="" 
			            	layout="fill"
			            	objectFit="cover"
			            	priority
		            	/>
			        </div>
		        </div>
		        <div className="flex flex-col px-[150px] gap-[50px] py-[100px]">
		        	<h1 className="text-[25px] font-bold text-center font-pd text-primary">Wonderlust</h1>
		        	<div className="space-y-[20px]">
			        	<div>
			        		<h3 className="text-[20px] font-bold text-primary">Buat Akun Baru</h3>
			        		<p className="text-secondary">Silakan isikan data Anda untuk memulai berjelajah bersama kami.</p>
			        	</div>
			        	
			        	<Form />

		        	</div>
		        	<div className="text-center">
		        		<p className="text-secondary">Sudah punya akun?</p>
		        		<Link href="/auth/login" className="text-[#FE6A5F]">
		        			<a>Masuk ke akun Anda</a>
		        		</Link>
		        	</div>
		        </div>
	    	</div>
    	</Layout>	
	)
}

function Form() {
	const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Name is required'),
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
        cpassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
        // acceptTerms: Yup.bool()
        //     .oneOf([true], 'Accept Ts & Cs is required')
    });

	const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    async function onSubmit(data) {
        // display form data on success
        // alert(JSON.stringify(data));
        console.log(data);
        createUser(data);
    }

	return (
		<form method="post" onSubmit={handleSubmit(onSubmit)} className="space-y-[20px]">
	    	<div className="space-y-[10px]">
	        	<div className="space-y-[10px]">
	        		<label htmlFor="name" className="text-[15px] font-bold text-primary">Nama</label>
	        		<input 
	        			type="text" 
	        			{...register('name')} 
	        			id="name" 
	        			placeholder="Masukkan nama lengkap Anda" 
	        			className={`py-[20px] px-[30px] border w-full rounded-[10px] ${errors.name ? 'border-red-700' : 'border-[#E1E1E1]'}`} 
        			/>
                    <div className="text-red-700">{errors.name?.message}</div>	
	        	</div>
	        	<div className="space-y-[10px]">
	        		<label htmlFor="email" className="text-[15px] font-bold text-primary">Email</label>
	        		<input type="text" {...register('email')} id="email" placeholder="Masukkan email Anda" className={`py-[20px] px-[30px] border w-full rounded-[10px] ${errors.email ? 'border-red-700' : 'border-[#E1E1E1]'}`}  />
                    <div className="text-red-700">{errors.email?.message}</div>
	        	</div>
	        	<div className="space-y-[10px]">
	        		<label htmlFor="password" className="text-[15px] font-bold text-primary">Password</label>
	        		<input type="password" {...register('password')} id="password" placeholder="Buat kata sandi baru Anda" className={`py-[20px] px-[30px] border w-full rounded-[10px] ${errors.password ? 'border-red-700' : 'border-[#E1E1E1]'}`}  />
                    <div className="text-red-700">{errors.password?.message}</div>
	        	</div>
	        	<div className="space-y-[10px]">
	        		<label htmlFor="password" className="text-[15px] font-bold text-primary">Konfirmasi Password</label>
	        		<input type="password" {...register('cpassword')} id="password" placeholder="Masukkan kata sandi baru Anda" className={`py-[20px] px-[30px] border w-full rounded-[10px] ${errors.cpassword ? 'border-red-700' : 'border-[#E1E1E1]'}`}  />
                    <div className="text-red-700">{errors.cpassword?.message}</div>
	        	</div>
	    	</div>
	    	<button className="w-full text-blue-900">
	    		<Button title="Daftar" />
	    	</button>
		</form>
	)	
}