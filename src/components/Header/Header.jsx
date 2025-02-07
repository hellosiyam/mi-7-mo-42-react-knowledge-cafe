import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 mx-4 border-b-2 border-[#11111126]'>
            <h1 className="text-4xl text-[#111111] font-bold">Knowledge Cafe</h1>
            <img src={profile}/>
        </header>
    );
};

export default Header;