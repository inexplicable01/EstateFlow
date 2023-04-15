import React, { useEffect, useState } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { useSelector , useDispatch } from 'react-redux';
import {useNavigate} from "react-router-dom";
import {logoutUser} from  "../../store/actions";
//import images
import avatar1 from "../../assets/images/users/avatar-1.jpg";

const ProfileDropdown = () => {

    const dispatch = useDispatch();
    const { user } = useSelector(state => ({
        user: state.Profile.user,
    }));
const navigate = useNavigate();

    // const [email, setUserEmail] = useState();

    // useEffect(() => {
    //     if (sessionStorage.getItem("authUser")) {
    //         const obj = JSON.parse(sessionStorage.getItem("authUser"));
    //         setUserEmail(process.env.REACT_APP_DEFAULTAUTH === "fake" ? obj.username === undefined ? user.first_name ? user.first_name : obj.data.first_name : "Admin" || "Admin" :
    //             process.env.REACT_APP_DEFAULTAUTH === "firebase" ? obj.providerData[0].email : "Admin"
    //         );
    //     }
    // }, [email, user]);
    const handleLogout = () => {
        // Dispatch the logout action
        dispatch(logoutUser());

        // Redirect to the login page or any other page you'd like after logout
        // window.location.href = process.env.PUBLIC_URL + "/login";
        navigate('/landing')
    };
    //Dropdown Toggle
    const [isProfileDropdown, setIsProfileDropdown] = useState(false);
    const toggleProfileDropdown = () => {
        setIsProfileDropdown(!isProfileDropdown);
    };
    return (
        <React.Fragment>
            <Dropdown isOpen={isProfileDropdown} toggle={toggleProfileDropdown} className="ms-sm-3 header-item topbar-user">
                <DropdownToggle tag="button" type="button" className="btn">
                    <span className="d-flex align-items-center">
                        <img className="rounded-circle header-profile-user" src={avatar1}
                            alt="Header Avatar" />
                        <span className="text-start ms-xl-2">
                            <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">{user.first_name} {user.last_name}</span>
                            <span className="d-none d-xl-block ms-1 fs-13 text-muted user-name-sub-text">{user.email}</span>
                        </span>
                    </span>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-end">

                    <h6 className="dropdown-header">Welcome {user.first_name}!</h6>
                    <DropdownItem href={process.env.PUBLIC_URL + "/profile"}><i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i>
                        <span className="align-middle">Profile</span></DropdownItem>
                    <DropdownItem href={process.env.PUBLIC_URL + "/apps-chat"}><i
                        className="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1"></i> <span
                            className="align-middle">Messages</span></DropdownItem>
                    <DropdownItem href={process.env.PUBLIC_URL + "#"}><i
                        className="mdi mdi-calendar-check-outline text-muted fs-16 align-middle me-1"></i> <span
                            className="align-middle">Taskboard</span></DropdownItem>
                    <DropdownItem href={process.env.PUBLIC_URL + "/pages-faqs"}><i
                        className="mdi mdi-lifebuoy text-muted fs-16 align-middle me-1"></i> <span
                            className="align-middle">Help</span></DropdownItem>
                    <div className="dropdown-divider"></div>
                    {/*<DropdownItem href={process.env.PUBLIC_URL + "/pages-profile"}><i*/}
                    {/*    className="mdi mdi-wallet text-muted fs-16 align-middle me-1"></i> <span*/}
                    {/*        className="align-middle">Balance : <b>$5971.67</b></span></DropdownItem>*/}
                    <DropdownItem href={process.env.PUBLIC_URL + "/pages-profile-settings"}><span
                        className="badge bg-soft-success text-success mt-1 float-end">New</span><i
                            className="mdi mdi-cog-outline text-muted fs-16 align-middle me-1"></i> <span
                                className="align-middle">Settings</span></DropdownItem>
                    <DropdownItem href={process.env.PUBLIC_URL + "/auth-lockscreen-basic"}><i
                        className="mdi mdi-lock text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Lock screen</span></DropdownItem>
                    <DropdownItem onClick={handleLogout}>
                        <i className="mdi mdi-logout text-muted fs-16 align-middle me-1"></i>
                        <span className="align-middle" data-key="t-logout">Logout</span>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </React.Fragment>
    );
};

export default ProfileDropdown;