import '../scss/components/_navigation.scss';
import '../scss/components/_common.scss';
import '../Plugins/bootstrap/bootstrap.min.css';
import logo from '../images/logo.png';

export default function Navbar()
{
    return (
        <>
            <nav className="navbar main-nav border-less fixed-top navbar-expand-lg p-o">
                <div className='container-fluid p-0'>
                    <a className='navbar-brand' href='#'>
                        <img src={logo} alt='logo'/>
                    </a>

                </div>


            </nav>
        </>
    )
}