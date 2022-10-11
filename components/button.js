export default function Button({title, border, customClass, disabled}) {
    return (
        <div>
            {border ? 
                <div className={`border text-primary rounded-[5px] py-[15px] px-[25px] block text-center ${customClass}`}>
                    {title}
                </div>
            : 
                <div className={`${disabled ? 'bg-[#6C757D]' : 'bg-[#FE6A5F]'} text-white rounded-[5px] py-[15px] px-[25px] block text-center`}>
                    {title}
                </div>
            }
        </div>
    )
}