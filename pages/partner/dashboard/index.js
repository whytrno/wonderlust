import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../../components/layout'
import Header from '../../../components/header'
import Button from '../../../components/button'
import AddCard from '../../../components/addCard'
import Footer from '../../../components/footer'

export default function dashboard() {
	return(
		<Layout title="Dashboard" loggedIn>
			<div className="px-[120px] py-[50px] text-primary space-y-[30px]">
				<div>
					<h1 className="text-[20px] font-bold">Hotel Anda</h1>
					<p className="text-secondary">Berikut merupakan daftar hotel yang telah Anda tambahkan.</p>
				</div>
				<div className="grid grid-cols-3 gap-[41px]">
					<div className="space-y-[20px]">
						<div className="h-[250px] w-full rounded-[10px] relative">
							<Image
								src="/images/hotel.png"
								alt="Hotel"
								layout="fill"
								objectFit="cover"
							/>
						</div>
						<div>
							<h1 className="text-[20px] font-bold">Four Points</h1>
							<p className="text-secondary">Terakhir diubah 20/20/2021</p>
						</div>
						<div>
							<Link href="/">
								<a>
									<Button title="Ubah" border customClass="border-[#E1E1E1] text-primary" />
								</a>
							</Link>
						</div>
					</div>
					<Link href="/partner/dashboard/add-hotel">
						<a>
							<AddCard title="Tambah Hotel Baru" />
						</a>
					</Link>
				</div>
			</div>
			<Footer />
		</Layout>	
	)
}