import Image from 'next/image'

export default function AddCard({ title, customClass }) {
	return (
		<div className={`rounded-[10px] border border-[#FE6A5F] flex items-center justify-center w-full h-full ${customClass}`}>
			<div className="space-y-[10px]">
				<div className="flex items-center justify-center">
					<div className="w-[50px] h-[50px] relative">
						<Image 
							src="/icons/plus.svg"
							alt="scg"
							layout="fill"
							objectFit="cover"
						/>
					</div>
				</div>
				<p className="text-[20px] text-[#FE6A5F]">{title}</p>
			</div>
		</div>
	)
}