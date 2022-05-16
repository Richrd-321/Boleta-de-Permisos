import LogoSeda from '.../img/LogoSeda.png';

const Logo = () => {
    return(
        <img src={ LogoSeda } alt="Sedacusco logo" style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px'
        }} />
    )
}

export default Logo;
