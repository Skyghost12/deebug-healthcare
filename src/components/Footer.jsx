function Footer() {
    const year = new Date();

    return(
        <div className="flex justify-center bg-blue-600 text-white p-4" >
                <h3 className="font-semibold ">Copyright &copy; {year.getFullYear()}. All right reserved.</h3>
        </div>
    )
}

export default Footer