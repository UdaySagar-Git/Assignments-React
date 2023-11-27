import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [users, setUser] = useState([]);
    useEffect(() => {
        console.log(users)
    }, [users])

    return (
        <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-500 flex items-center justify-center min-h-screen bg-gray-100">
            <form className="bg-white p-8 rounded-lg shadow-md max-w-md w-full" onSubmit={handleSubmit((data) => {setUser([...users, data]); })}>
                <h1 className="text-3xl mb-4 text-center font-semibold text-gray-800">Registration Form</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">First Name</label>
                        <input type="text" {...register('firstName', { required: true, minLength: 4, maxLength: 6 })} className="border p-2 w-full rounded" />
                        {errors.firstName?.type === 'required' && (<p className="text-red-500">* First name is required</p>)}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input type="text" {...register('lastName', { required: true, minLength: 4, maxLength: 6 })} className="border p-2 w-full rounded" />
                        {errors.lastName?.type === 'required' && (<p className="text-red-500">* Last name is required</p>)}
                    </div>
                </div>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Birthday</label>
                        <input type="date" {...register('birthday', { required: true })} className="border p-2 w-full rounded" />
                        {errors.birthday?.type === 'required' && (<p className="text-red-500">* Birthday is required</p>)}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Gender</label>
                        <div className="flex items-center">
                            <label className="mr-4 text-sm">
                                <input type="radio" {...register('gender', { required: true })} value="male" className="mr-2" />
                                Male
                            </label>
                            <label className="text-sm">
                                <input type="radio" {...register('gender', { required: true })} value="female" className="mr-2" />
                                Female
                            </label>
                        </div>
                        {errors.gender?.type === 'required' && (<p className="text-red-500">* Gender is required</p>)}
                    </div>
                </div>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" {...register('email', { required: true })} className="border p-2 w-full rounded" />
                        {errors.email?.type === 'required' && (<p className="text-red-500">* Email is required</p>)}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Phone number</label>
                        <input type="number" {...register('phoneNumber', { required: true, minLength: 10, maxLength: 10 })} className="border p-2 w-full rounded" />
                        {errors.phoneNumber?.type === 'required' && (<p className="text-red-500">* Phone number is required</p>)}
                        {errors.phoneNumber?.type === 'minLength' && (<p className="text-red-500">* Phone number is too short</p>)}
                        {errors.phoneNumber?.type === 'maxLength' && (<p className="text-red-500">* Phone number is too long</p>)}
                    </div>
                </div>
                <div>
                    <label className="mt-4 block text-sm font-medium text-gray-700">Subject</label>
                    <select {...register('subject', { required: true })} className="border p-2 w-full rounded">
                        <option value="" disabled selected>Choose Option</option>
                        <option value="c">C</option>
                        <option value="cpp">C++</option>
                        <option value="java">Java</option>
                    </select>
                    {errors.subject?.type === 'required' && (<p className="text-red-500">* Subject is required</p>)}
                </div>
                <div className="col-span-2 mt-6">
                    <button type="submit" className="bg-blue-600/90 text-white p-2 rounded-full w-[130px] block mx-auto ">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
