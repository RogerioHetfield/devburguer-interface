import { useNavigate } from 'react-router-dom';

function BackButton() {
    const navigate = useNavigate();

    return (
        <BackButton onClick={() => navigate('/')}>
        </BackButton>

    );
}

export default BackButton;