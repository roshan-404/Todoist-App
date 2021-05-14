import { FaPizzaSlice } from 'react-icons/fa' 

export const Header = () => {
    const X =1
    return ( 
        <header className='header' data-testid='header' >
            <nav>
                <div className="logo">
                    <img src='/images/logo.png' alt="TododList" />
                </div>
                <div className="settings">
                    <ul>
                        <li>+</li>
                        <li><FaPizzaSlice /></li>
                    </ul>
                </div>
            </nav>
        </header>
     );
}
 
