import img1 from '../../assets/img5.jpg'
import img2 from '../../assets/img6.jpg'
import img3 from '../../assets/img6.jpg'
import img4 from '../../assets/img1.jpg'
import img5 from '../../assets/img4.jpg'


export const Videos = () => {
    return (
        <>

            <section>
                <h2 className='text-xl font-bold mb-5'>Videos</h2>


                <section className='space-y-3 md:space-y-0 md:grid grid-cols-4 gap-4'>
                    <div><img src={img1} alt="image" className='' /></div>
                    <div><img src={img2} alt="image" className='' /></div>
                    <div><img src={img3} alt="image" className='' /></div>
                    <div><img src={img4} alt="image" className='' /></div>
                    <div><img src={img4} alt="image" className='' /></div>
                    <div><img src={img5} alt="image" className='' /></div>
                </section>
            </section>

        </>
    )
}