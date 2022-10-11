import Link from 'next/link'
import Button from '../../components/button'
import Layout from '../../components/layout'

// Validation
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export default function ForgotPasswordProcess() {
	return (
		<Layout title="Proses lupa password partner" auth>
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
				</div>	
			</div>
		</Layout>
	)
}

function Form() {
	const validationSchema = Yup.object().shape({
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
        cpassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),        // acceptTerms: Yup.bool()
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

    return(
    	<form method="post" onSubmit={handleSubmit(onSubmit)} className="space-y-[20px]">
        	<div className="space-y-[10px]">
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
        	<div className="space-y-[10px]">
	        	<button className="w-full text-blue-900">
	        		<Button title="Masuk" />
	        	</button>
	        	<div>
		        	<Link href="/" className="w-full text-blue-900">
		        		<a>
		        			<Button title="Batal" border customClass="border-[#E1E1E1] text-primary"/>
		        		</a>
		        	</Link>
	        	</div>
        	</div>
    	</form>
	)
}