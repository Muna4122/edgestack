export function Footer () {
   const year = new Date().getFullYear()
   
   
    return (
      <footer className="bg-white px-5 md:flex justify-between py-5 shadow-md inset shadow-sm">
        <div className="flex gap-2 text-gray-600">
            <p>&copy; {year} Edgestack System </p>
            <p>All rights reserved</p>
        </div>
        <div className="flex gap-2  text-gray-600">
            <p>Privacy Policy</p>
            <p>Term of Service</p>
            <p>Support</p>
        </div>
      </footer>
    )
}