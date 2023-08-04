import './Hero.scss'
function Hero() {
    return (
        <section className='hero'>
            <img src="/images/sneaker/sneaker-1.jpg" alt="sneaker brand" />
            <div className='hero__details'>
            <h1 className='hero__details-heading'>If you wanna walk,<br/> walk right</h1>
            <p className='hero__details-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Corporis voluptatem eligendi dolores cum quae optio <br /> porro tenetur provident maiores illum.</p>
            <div className='hero__btn'>
            <button>shop men</button>
            <button>shop women</button>
            </div>
            </div>
        </section>
    )
}

export default Hero
