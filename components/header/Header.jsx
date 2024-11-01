import profiles from '../../assets/images/profile.png'

const header = () => {
    return (
        <header className='flex justify-between items-center p-4  border-b-2 max-w-7xl mx-auto'>
            <h1 className='text-4xl font-bold text-opacity-5  '>Knowadge Cafe</h1>
            <img src={profiles} alt="" />
        </header>
    );
};

export default header;