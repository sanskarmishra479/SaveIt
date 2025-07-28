import logo from './logo.png'

export const Logo = () => {
    return (
        <div className="h-8 w-8 bg-white rounded-lg flex items-center justify-center">
            <img src={logo} alt="logo" />
        </div>
    );
};