import React, { useEffect, useState } from "react";
import { useLoadingContext } from "react-router-loading";
import TableComponent from "../../component/TableComponent";
import ModalComponent from "../../component/Modal";
import getDataUser from "../../../api/User";
import axios from "axios";


const DataUser = () => {
    const [state, setState] = useState();
    const loadingContext = useLoadingContext();
    const [showLoader, setShowLoader] = useState(false);
    const [dataPost, setDataPost] = useState({
        name: "",
        email: "",
        password: "",
        username: "",
        phone: "",
        role: "",
    });
    const [todos, setTodos] = useState([
        'Belajar React Fundamental',
        'Ngoding Sampai Bisa',
      ]);

    const formSubmitHandler = (todo) => {
        console.log('todo dari parent', todo);
        setTodos([...todos, todo]);
    };
    const token = localStorage.getItem("token");

    const loading = async () => {
        // loading some data
        const data = await getDataUser();
        setState(data);
        // call method to indicate that loading is done
        loadingContext.done();
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setDataPost({ ...dataPost, [e.target.name]: value });
    };

    const handleEditId= (id) => {
        console.log(id);
    };

    const handleEditButton = (id) => {
        state.data.map((item, index) => {
            if (item.id === id) {
                setDataPost({
                    name: item.name,
                    email: item.email,
                    password: item.password,
                    username: item.username,
                    phone: item.phone,
                    role: item.role,
                });
            }
        });
    };

    const handleChangeEdit =
        (e) =>
        ({ target }) => {
            console.log(target.value);
        };

    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    };
    //  console.log(props.data);
    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            name: dataPost.name,
            email: dataPost.emails,
            password: dataPost.password,
            username: dataPost.username,
            phone: dataPost.phone,
            role: dataPost.role,
        };
        // console.log(userData);
        setShowLoader(true);
        setTimeout(() => {
            setShowLoader(false);
            axios
                .post(process.env.REACT_APP_API_LINK + "user", userData, {
                    headers: headers,
                })
                .then((res) => {
                    // console.log(res.data.status);
                    if (res.data.status == "success") {
                        loading();
                        alert("berhasil menambahkan data");
                    } else {
                        alert("gagal menambahkan data");
                    }
                })
                .catch((error) => {
                    console.log(error.response.data.message);
                });
        }, 1000);
    };
    const handleEdit = (e) => {
        e.preventDefault();
        const userData = [];
        dataPost.forEach((item) => {
            console.log(item);
            userData = {
                //
            };
        });

        // console.log(userData);
        setShowLoader(true);
        setTimeout(() => {
            setShowLoader(false);
            axios
                .post(process.env.REACT_APP_API_LINK + "user", userData, {
                    headers: headers,
                })
                .then((res) => {
                    // console.log(res.data.status);
                    if (res.data.status == "success") {
                        loading();
                        alert("berhasil menambahkan data");
                    } else {
                        alert("gagal menambahkan data");
                    }
                })
                .catch((error) => {
                    console.log(error.response.data.message);
                });
        }, 1000);
    };

    //  const editBtn=;

    useEffect(() => {
        loading();
    }, [handleEditId(localStorage.getItem("Itemsid"))]);
    return (
        <div className="card w-75 mx-auto mt-5">
            <div className="card-header text-center">
                <h3 className="text-grey">Data User</h3>
            </div>
            <div className="card-body">
                {state ? (
                    <>
                        <div className="table-responsive">
                            {/*  modal*/}
                            <ModalComponent
                                modalType="add"
                                typeBtn="button-new"
                                buttonLabel="Add User"
                                className="btn btn-primary float-end md-2"
                                modalTitle="Add User"
                                //input form here
                                modalBody={
                                    <>
                                        <form onSubmit={handleSubmit}>
                                            <div className="mb-3">
                                                <label
                                                    htmlFor="exampleInputname"
                                                    className="form-label"
                                                >
                                                    name
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control name"
                                                    id="exampleInputname"
                                                    name="name"
                                                    aria-describedby="nameHelp"
                                                    value={dataPost.name}
                                                    onChange={handleChange}
                                                />
                                                <div
                                                    id="nameHelp"
                                                    className="form-text"
                                                >
                                                    We'll never share your email
                                                    with anyone else.
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label
                                                    htmlFor="exampleInputemail"
                                                    className="form-label"
                                                >
                                                    email
                                                </label>
                                                <input
                                                    type="email"
                                                    className="form-control email"
                                                    id="exampleInputemail"
                                                    name="email"
                                                    aria-describedby="emailHelp"
                                                    value={dataPost.emails}
                                                    on={handleChange}
                                                />
                                                <div
                                                    id="emailHelp"
                                                    className="form-text"
                                                >
                                                    We'll never share your email
                                                    with anyone else.
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label
                                                    htmlFor="exampleInputpassword"
                                                    className="form-label"
                                                >
                                                    password
                                                </label>
                                                <input
                                                    type="password"
                                                    className="form-control password"
                                                    id="exampleInputpassword"
                                                    name="password"
                                                    aria-describedby="passwordHelp"
                                                    value={dataPost.password}
                                                    onChange={handleChange}
                                                />
                                                <div
                                                    id="passwordHelp"
                                                    className="form-text"
                                                >
                                                    We'll never share your email
                                                    with anyone else.
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label
                                                    htmlFor="exampleInputusername"
                                                    className="form-label"
                                                >
                                                    username
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control username"
                                                    id="exampleInputusername"
                                                    name="username"
                                                    aria-describedby="usernameHelp"
                                                    value={dataPost.username}
                                                    onChange={handleChange}
                                                />
                                                <div
                                                    id="usernameHelp"
                                                    className="form-text"
                                                >
                                                    We'll never share your email
                                                    with anyone else.
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label
                                                    htmlFor="exampleInputphone"
                                                    className="form-label"
                                                >
                                                    phone
                                                </label>
                                                <input
                                                    type="number"
                                                    className="form-control phone"
                                                    id="exampleInputphone"
                                                    name="phone"
                                                    aria-describedby="phoneHelp"
                                                    value={dataPost.phone}
                                                    onChange={handleChange}
                                                />
                                                <div
                                                    id="phoneHelp"
                                                    className="form-text"
                                                >
                                                    We'll never share your email
                                                    with anyone else.
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label
                                                    htmlFor="exampleInputrole"
                                                    className="form-label"
                                                >
                                                    role
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control role"
                                                    id="exampleInputrole"
                                                    name="role"
                                                    aria-describedby="roleHelp"
                                                    value={dataPost.role}
                                                    onChange={handleChange}
                                                />
                                                <div
                                                    id="roleHelp"
                                                    className="form-text"
                                                >
                                                    We'll never share your email
                                                    with anyone else.
                                                </div>
                                            </div>

                                            <div className="mb-3">
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary float-end"
                                                >
                                                    Submit
                                                </button>
                                            </div>
                                        </form>
                                    </>
                                }
                                modalFooter=""
                            />

                            <TableComponent
                                tableClass="table table-bordered"
                                tableHead={[
                                    { id: "Nama" },
                                    { id: "Email" },
                                    { id: "Role" },
                                    { id: "Action" },
                                ]}
                                tableBody={state.data.map((item, index) => ({
                                    id_item: item.id,
                                    alamat: item.name,
                                    no: item.email,
                                    nama: item.role,
                                    actionEdit: [
                                        <>
                                            <li className="">
                                                <ModalComponent
                                                    modalType="edit"
                                                    typeBtn="dropdown-edit"
                                                    ModalBtnid={item.id}
                                                    buttonLabel="Edit"
                                                    className="btn btn-primary float-end md-2"
                                                    modalTitle="Edit"
                                                    propsSubmitHandler={formSubmitHandler}
                                                    //input form here
                                                    modalBody={
                                                        <>
                                                            <form onSubmit={handleSubmit}>
                                                                <div className="mb-3">
                                                                    <label
                                                                        htmlFor="exampleInputname"
                                                                        className="form-label"
                                                                    >
                                                                        name
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control name"
                                                                        key="exampleInputname"
                                                                        name="name"
                                                                        aria-describedby="nameHelp"
                                                                        value={dataPost.name}
                                                                        onChange={handleChange}
                                                                    />
                                                                    <div
                                                                        id="nameHelp"
                                                                        className="form-text"
                                                                    >
                                                                        We'll never share your email with
                                                                        anyone else.
                                                                    </div>
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label
                                                                        htmlFor="exampleInputemail"
                                                                        className="form-label"
                                                                    >
                                                                        email
                                                                    </label>
                                                                    <input
                                                                        type="email"
                                                                        className="form-control email"
                                                                        id="exampleInputemail"
                                                                        name="email"
                                                                        aria-describedby="emailHelp"
                                                                        value={dataPost.email}
                                                                        onChange={handleChange}
                                                                    />
                                                                    <div
                                                                        id="emailHelp"
                                                                        className="form-text"
                                                                    >
                                                                        We'll never share your email with
                                                                        anyone else.
                                                                    </div>
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label
                                                                        htmlFor="exampleInputpassword"
                                                                        className="form-label"
                                                                    >
                                                                        password
                                                                    </label>
                                                                    <input
                                                                        type="password"
                                                                        className="form-control password"
                                                                        id="exampleInputpassword"
                                                                        name="password"
                                                                        aria-describedby="passwordHelp"
                                                                        value={dataPost.password}
                                                                        onChange={handleChange}
                                                                    />
                                                                    <div
                                                                        id="passwordHelp"
                                                                        className="form-text"
                                                                    >
                                                                        We'll never share your email with
                                                                        anyone else.
                                                                    </div>
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label
                                                                        htmlFor="exampleInputusername"
                                                                        className="form-label"
                                                                    >
                                                                        username
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control username"
                                                                        id="exampleInputusername"
                                                                        name="username"
                                                                        aria-describedby="usernameHelp"
                                                                        value={dataPost.username}
                                                                        onChange={handleChange}
                                                                    />
                                                                    <div
                                                                        id="usernameHelp"
                                                                        className="form-text"
                                                                    >
                                                                        We'll never share your email with
                                                                        anyone else.
                                                                    </div>
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label
                                                                        htmlFor="exampleInputphone"
                                                                        className="form-label"
                                                                    >
                                                                        phone
                                                                    </label>
                                                                    <input
                                                                        type="number"
                                                                        className="form-control phone"
                                                                        id="exampleInputphone"
                                                                        name="phone"
                                                                        aria-describedby="phoneHelp"
                                                                        value={dataPost.phone}
                                                                        onChange={handleChange}
                                                                    />
                                                                    <div
                                                                        id="phoneHelp"
                                                                        className="form-text"
                                                                    >
                                                                        We'll never share your email with
                                                                        anyone else.
                                                                    </div>
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label
                                                                        htmlFor="exampleInputrole"
                                                                        className="form-label"
                                                                    >
                                                                        role
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control role"
                                                                        id="exampleInputrole"
                                                                        name="role"
                                                                        aria-describedby="roleHelp"
                                                                        value={dataPost.role}
                                                                        onChange={handleChange}
                                                                    />
                                                                    <div
                                                                        id="roleHelp"
                                                                        className="form-text"
                                                                    >
                                                                        We'll never share your email with
                                                                        anyone else.
                                                                    </div>
                                                                </div>
                                                        
                                                                <div className="mb-3">
                                                                    <button type="submit" className="btn btn-primary float-end">Submit</button>
                                                                </div>
                                                            </form>
                                                        </>
                                                    }
                                                    modalFooter=""
                                                />
                                            </li>

                                            {/* <button
                                                type="button"
                                                classname="btn btn-primary"
                                                data-bs-toggle="modal"
                                                data-bs-target="#modalEditdata"
                                                onClick={(event) => {
                                                    handleEditButton(item.id);
                                                }}
                                            >
                                                Edit
                                            </button> */}
                                        </>,
                                    ],
                                }))}
                                tableForm={
                                    <>
                                      {/* <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label
                                                htmlFor="exampleInputname"
                                                className="form-label"
                                            >
                                                name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control name"
                                                key="exampleInputname"
                                                name="name"
                                                aria-describedby="nameHelp"
                                                value={dataPost.name}
                                                onChange={handleChange}
                                            />
                                            <div
                                                id="nameHelp"
                                                className="form-text"
                                            >
                                                We'll never share your email with
                                                anyone else.
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label
                                                htmlFor="exampleInputemail"
                                                className="form-label"
                                            >
                                                email
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control email"
                                                id="exampleInputemail"
                                                name="email"
                                                aria-describedby="emailHelp"
                                                value={dataPost.email}
                                                onChange={handleChange}
                                            />
                                            <div
                                                id="emailHelp"
                                                className="form-text"
                                            >
                                                We'll never share your email with
                                                anyone else.
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label
                                                htmlFor="exampleInputpassword"
                                                className="form-label"
                                            >
                                                password
                                            </label>
                                            <input
                                                type="password"
                                                className="form-control password"
                                                id="exampleInputpassword"
                                                name="password"
                                                aria-describedby="passwordHelp"
                                                value={dataPost.password}
                                                onChange={handleChange}
                                            />
                                            <div
                                                id="passwordHelp"
                                                className="form-text"
                                            >
                                                We'll never share your email with
                                                anyone else.
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label
                                                htmlFor="exampleInputusername"
                                                className="form-label"
                                            >
                                                username
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control username"
                                                id="exampleInputusername"
                                                name="username"
                                                aria-describedby="usernameHelp"
                                                value={dataPost.username}
                                                onChange={handleChange}
                                            />
                                            <div
                                                id="usernameHelp"
                                                className="form-text"
                                            >
                                                We'll never share your email with
                                                anyone else.
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label
                                                htmlFor="exampleInputphone"
                                                className="form-label"
                                            >
                                                phone
                                            </label>
                                            <input
                                                type="number"
                                                className="form-control phone"
                                                id="exampleInputphone"
                                                name="phone"
                                                aria-describedby="phoneHelp"
                                                value={dataPost.phone}
                                                onChange={handleChange}
                                            />
                                            <div
                                                id="phoneHelp"
                                                className="form-text"
                                            >
                                                We'll never share your email with
                                                anyone else.
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label
                                                htmlFor="exampleInputrole"
                                                className="form-label"
                                            >
                                                role
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control role"
                                                id="exampleInputrole"
                                                name="role"
                                                aria-describedby="roleHelp"
                                                value={dataPost.role}
                                                onChange={handleChange}
                                            />
                                            <div
                                                id="roleHelp"
                                                className="form-text"
                                            >
                                                We'll never share your email with
                                                anyone else.
                                            </div>
                                        </div>
                                
                                        <div className="mb-3">
                                            <button type="submit" className="btn btn-primary float-end">Submit</button>
                                        </div>
                                      </form> */}
                                    </>
                                }
                                tableAction={
                                    [
                                        // {edit: <><li onClick={submitFormEdit} ><ModalComponent
                                        //   modalData={
                                        //     ''
                                        //   }
                                        //   typeBtn="dropdown-edit"
                                        //   buttonLabel='Edit'
                                        //   className="btn btn-primary float-end md-2"
                                        //   modalTitle='Edit'
                                        //   //input form here
                                        //   modalBody={
                                        //     <>
                                        //       <form onSubmit={handleSubmit}>
                                        //         <div className="mb-3">
                                        //           <label htmlFor="exampleInputname" className="form-label">name</label>
                                        //           <input type="text" className="form-control name" key="exampleInputname" name="name" aria-describedby="nameHelp" value={dataPost.name} onChange={handleChange}/>
                                        //           <div id="nameHelp" className="form-text">We'll never share your email with anyone else.</div>
                                        //         </div>
                                        //         <div className="mb-3">
                                        //           <label htmlFor="exampleInputemail" className="form-label">email</label>
                                        //           <input type="email" className="form-control email" id="exampleInputemail" name="email" aria-describedby="emailHelp" value={dataPost.email} onChange={handleChange}/>
                                        //           <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                        //         </div>
                                        //         <div className="mb-3">
                                        //           <label htmlFor="exampleInputpassword" className="form-label">password</label>
                                        //           <input type="password" className="form-control password" id="exampleInputpassword" name="password" aria-describedby="passwordHelp" value={dataPost.password} onChange={handleChange}/>
                                        //           <div id="passwordHelp" className="form-text">We'll never share your email with anyone else.</div>
                                        //         </div>
                                        //         <div className="mb-3">
                                        //           <label htmlFor="exampleInputusername" className="form-label">username</label>
                                        //           <input type="text" className="form-control username" id="exampleInputusername" name="username" aria-describedby="usernameHelp" value={dataPost.username} onChange={handleChange}/>
                                        //           <div id="usernameHelp" className="form-text">We'll never share your email with anyone else.</div>
                                        //         </div>
                                        //         <div className="mb-3">
                                        //           <label htmlFor="exampleInputphone" className="form-label">phone</label>
                                        //           <input type="number" className="form-control phone" id="exampleInputphone" name="phone" aria-describedby="phoneHelp" value={dataPost.phone} onChange={handleChange}/>
                                        //           <div id="phoneHelp" className="form-text">We'll never share your email with anyone else.</div>
                                        //         </div>
                                        //         <div className="mb-3">
                                        //           <label htmlFor="exampleInputrole" className="form-label">role</label>
                                        //           <input type="text" className="form-control role" id="exampleInputrole" name="role" aria-describedby="roleHelp" value={dataPost.role} onChange={handleChange}/>
                                        //           <div id="roleHelp" className="form-text">We'll never share your email with anyone else.</div>
                                        //         </div>
                                        //         <div className="mb-3">
                                        //             <button type="submit" className="btn btn-primary float-end">Submit</button>
                                        //         </div>
                                        //       </form>
                                        //     </>
                                        //   }
                                        //   modalFooter=""
                                        // /></li></>}
                                    ]
                                    // [{ name: "Edit",
                                    //   link: "/edit", onEdit:{submitFormEdit}},{ name: "Delete",
                                    //   link: "/delete"},
                                    // ]
                                }
                                paginate={[]}
                            />
                        </div>
                    </>
                ) : (
                    "loading..."
                )}
            </div>

            <>
                {/* Button trigger modal */}

                {/* Modal */}
                {/* <div
                    className="modal fade"
                    id="modalEditdata"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5
                                    className="modal-title"
                                    id="exampleModalLabel"
                                >
                                    Modal title
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                />
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="exampleInputname"
                                            className="form-label"
                                        >
                                            name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control name"
                                            key="exampleInputname"
                                            name="name"
                                            aria-describedby="nameHelp"
                                            value={dataPost.name}
                                            onChange={handleChange}
                                        />
                                        <div
                                            id="nameHelp"
                                            className="form-text"
                                        >
                                            We'll never share your email with
                                            anyone else.
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="exampleInputemail"
                                            className="form-label"
                                        >
                                            email
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control email"
                                            id="exampleInputemail"
                                            name="email"
                                            aria-describedby="emailHelp"
                                            value={dataPost.email}
                                            onChange={handleChange}
                                        />
                                        <div
                                            id="emailHelp"
                                            className="form-text"
                                        >
                                            We'll never share your email with
                                            anyone else.
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="exampleInputpassword"
                                            className="form-label"
                                        >
                                            password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control password"
                                            id="exampleInputpassword"
                                            name="password"
                                            aria-describedby="passwordHelp"
                                            value={dataPost.password}
                                            onChange={handleChange}
                                        />
                                        <div
                                            id="passwordHelp"
                                            className="form-text"
                                        >
                                            We'll never share your email with
                                            anyone else.
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="exampleInputusername"
                                            className="form-label"
                                        >
                                            username
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control username"
                                            id="exampleInputusername"
                                            name="username"
                                            aria-describedby="usernameHelp"
                                            value={dataPost.username}
                                            onChange={handleChange}
                                        />
                                        <div
                                            id="usernameHelp"
                                            className="form-text"
                                        >
                                            We'll never share your email with
                                            anyone else.
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="exampleInputphone"
                                            className="form-label"
                                        >
                                            phone
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control phone"
                                            id="exampleInputphone"
                                            name="phone"
                                            aria-describedby="phoneHelp"
                                            value={dataPost.phone}
                                            onChange={handleChange}
                                        />
                                        <div
                                            id="phoneHelp"
                                            className="form-text"
                                        >
                                            We'll never share your email with
                                            anyone else.
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="exampleInputrole"
                                            className="form-label"
                                        >
                                            role
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control role"
                                            id="exampleInputrole"
                                            name="role"
                                            aria-describedby="roleHelp"
                                            value={dataPost.role}
                                            onChange={handleChange}
                                        />
                                        <div
                                            id="roleHelp"
                                            className="form-text"
                                        >
                                            We'll never share your email with
                                            anyone else.
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <button
                                            type="submit"
                                            className="btn btn-primary float-end"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                >
                                    Save changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div> */}
            </>
        </div>
    );
};

export default DataUser;
