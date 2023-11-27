import { useForm } from 'react-hook-form';

function AddUser({users,setUser}) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onFormSubmit = (data) => {
        const isUsernameExists = users.some(user => user.username === data.username);
        if (isUsernameExists) {
            window.alert("Username already exists");
        } else {
            setUser([...users, data]);
        }
    }

    return (
<div>
<h1 className="text-3xl my-4 text-center font-semibold text-gray-800">Registration Form</h1>
    
        <div className="flex  justify-center">

            <form className="bg-white p-8 rounded-lg shadow-md max-w-md w-full" onSubmit={handleSubmit(onFormSubmit)}>
                    <div className='mt-4'>
                        <label className="block text-sm font-medium text-gray-700">Username</label>
                        <input type="text" {...register('username', { required: true, minLength: 4, maxLength: 8 })} className="border p-2 w-full rounded" />
                        {errors.username?.type === 'required' && (<p className="text-red-500">* Username is required</p>)}
                        {errors.username?.type === 'minLength' && (<p className="text-red-500">* Username must be of atleast 4 characters</p>)}
                        {errors.username?.type === 'maxLength' && (<p className="text-red-500">* Username should be atmost of 8 characters</p>)}
                    </div>

                    
                    <div className='mt-4'>
                        <label className="block text-sm font-medium text-gray-700">Birthday</label>
                        <input type="date" {...register('birthday', { required: true })} className="border p-2 w-full rounded" />
                        {errors.birthday?.type === 'required' && (<p className="text-red-500">* Birthday is required</p>)}
                    </div>
                    <div className='mt-4'>
                        <label className="block text-sm font-medium text-gray-700">City</label>
                        <input type="text" {...register('city', { required: true})} className="border p-2 w-full rounded" />
                        {errors.city?.type === 'required' && (<p className="text-red-500">* City is required</p>)}
                    </div>
                <div className="col-span-2 mt-6">
                    <button type="submit" className="bg-blue-600/90 text-white p-2 rounded-full w-[130px] block mx-auto ">AddUser</button>
                </div>
            </form>
        </div>
        </div>
    );
}

export default AddUser;
