import { 
    useActionData,
    useNavigate,
    useNavigation,
  } from 'react-router-dom';
  
  import NewPostForm from '../components/NewPostForm';
  
  
  function NewPostPage() {
    const data = useActionData();
  
    const navigation = useNavigation();
    console.log(navigation.state);
  
    const navigate = useNavigate();
  
    function cancelHandler() {
      navigate('/blog');
    }
  
    return (
      <>
        {data && data.status && <p>{data.message}</p>}
        <NewPostForm
          onCancel={cancelHandler}
          submitting={navigation.state === 'submitting'}
        />
      </>
    );
  }
  
  export default NewPostPage;
  
  