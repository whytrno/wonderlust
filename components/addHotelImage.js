import Image from 'next/image'

export default function AddHotelImage({ image }) {
	return (
		<div className="h-[343px] w-full relative">
			<Image 
				src={`/images/${image}`}
				alt="Hotel"
				layout="fill"
				objectFit="cover"
				className="rounded-[10px]"
			/>
		</div>
	)
}