import Link from 'next/link'
import Button from '../../components/button'
import Layout from '../../components/layout'

// Validation
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export default function Login() {
	return (
		<Layout title="Masuk partner" auth>
			<div className="bg-[#E4E9FF] flex justify-center">
				<div className="w-[483px] space-y-[50px] py-[100px] h-full bg-white px-[50px]">
					<h1 className="text-primary font-pd text-[25px] text-center"><label className="font-bold">Wonderlust</label> Partner</h1>
		        	<div className="space-y-[20px]">
			        	<div>
			        		<h3 className="text-[20px] font-bold text-primary">Atur Ulang Kata Sandi</h3>
			        		<p className="text-secondary">Hai <b>Fathoni</b>, silakan buat kata sandi baru Anda agar dapat kembali membuka kembali akun.</p>
			        	</div>

			        	<Form />
		        	</div>
		        	<div className="text-center">
		        		<p className="text-secondary">Lupa kata sandi?</p>
		        		<Link href="/partner/forgot-password">
		        			<a className="text-[#FE6A5F]">Atur ulang kata sandi Anda</a>
		        		</Link>
		        	</div>
				</div>	
			</div>
		</Layout>
	)
}

function Form() {
	const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
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

    return(
    	<form method="post" onSubmit={handleSubmit(onSubmit)} className="space-y-[20px]">
        	<div className="space-y-[10px]">
	        	<div className="space-y-[10px]">
	        		<label htmlFor="email" className="text-[15px] font-bold text-primary">Email</label>
	        		<input type="email" {...register('email')} id="email" placeholder="Masukkan email Anda" className={`py-[20px] px-[30px] border w-full rounded-[10px] ${errors.email ? 'border-red-700' : 'border-[#E1E1E1]'}`} />
                    <div className="text-red-700">{errors.email?.message}</div>
	        	</div>
	        	<div className="space-y-[10px]">
	        		<label htmlFor="password" className="text-[15px] font-bold text-primary">Password</label>
	        		<input type="password" {...register('password')} id="password" placeholder="Buat kata sandi Anda" className={`py-[20px] px-[30px] border w-full rounded-[10px] ${errors.password ? 'border-red-700' : 'border-[#E1E1E1]'}`} />
                    <div className="text-red-700">{errors.password?.message}</div>
	        	</div>
        	</div>
        	<div className="space-y-[10px]">
	        	<button className="w-full text-blue-900">
	        		<Button title="Login" />
	        	</button>
	        	<div>
		        	<Link href="/partner/register" className="w-full text-blue-900">
		        		<a>
		        			<Button title="Daftar" border customClass="border-[#E1E1E1] text-primary"/>
		        		</a>
		        	</Link>
	        	</div>
        	</div>
    	</form>
	)
}