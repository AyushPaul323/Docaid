import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./App.css";
import Appo from "./Appo";
import Hospital from "./main/Hospital";
import Doctor from "./main/Doctor";
import Sidenav from "./main/Sidenav";
import Contacts from "./main/Contacts";
import Bedg from "./main/Bedg";
import Member from "./pages/member";
import Docg from "./main/Docg";
import Aboutus from "./main/Aboutus";
import Aboutus1 from "./main/Aboutus1";
import Healthcare from "./main/Healthcare";
import Ambulance from "./main/Ambulance";
import Storage from "./main/Storage";
import Carrd from "./pages/Carrd";
import Admin from "./pages/admin";
import { Docctors } from "./pages/docctor";
import Contactus from "./main/Contactus";
import { Hosspital } from "./pages/Hosspital";
function App() {
	const [user, setUser] = useState(null);

	const getUser = async () => {
		try {
			const url = `http://localhost:8080/auth/login/success`;
			const { data } = await axios.get(url, { withCredentials: true });
			setUser(data.user._json);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getUser();
	}, []);

	return (
		<div className="container123">
			

			<Routes>
				<Route
					exact
					path="/Home"
					element={user ? <Home user={user} /> : <Navigate to="/login" />}
				/>
				<Route
					exact
					path="/login"
					element={user ? <Login /> : <Login />}
				/>
				<Route
					exact
					path="/signup"
					element={user ? <Signup /> : <Signup />}
				/>

				<Route
					exact
					path="/"
					element={user?<Appo user={user} />:<Appo user={user} />}
				/>

				<Route
					exact
					path="/Hospital"
					element={<Hospital user={user} />}
				/>
				<Route
					exact
					path="/Doctorappo"
					element={<Doctor user={user} />}
				/>
				<Route
					exact
					path="/"
					element={<Sidenav user={user} />}
				/>
				<Route
					exact
					path="/contact"
					element={<Contacts user={user} />}
				/>
				<Route
					exact
					path="/Hospital/bedg"
					element={<Bedg user={user} />}
				/>
				<Route
					exact
					path="/7439772170"
					element={<Member />}
				/>
				<Route
					exact
					path="/Hospital"
					element={<Hospital user={user} />}
				/>
				<Route
					exact
					path="/Doctorappo"
					element={<Doctor user={user} />}
				/>
				<Route
					exact
					path="/Doctorappo/Docg"
					element={<Docg user={user} />}
				/>
				<Route
					exact
					path="/Aboutus"
					element={<Aboutus user={user} />}
				/>
				<Route
					exact
					path="/Aboutus1"
					element={<Aboutus1 user={user} />}
				/>
		
			<Route
					exact
					path="/Healthcare"
					element={<Healthcare user={user} />}
				/>
				<Route
					exact
					path="/Ambulance"
					element={<Ambulance user={user} />}
				/>
			
			<Route
					exact
					path="/Storage"
					element={<Storage user={user} />}
				/>
			<Route
					exact
					path="/admin"
					element={<Admin user={user} />}
				/>
			<Route
					exact
					path="/Records"
					element={<Docctors user={user} />}
				/>
				<Route
					exact
					path="/Records1"
					element={<Hosspital user={user} />}
				/>
				<Route
					exact
					path="/ContactUs1"
					element={<Contactus user={user} />}
				/>
			</Routes>
		</div>
	);
}

export default App;