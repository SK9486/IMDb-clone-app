import NavBarItems from "./NavBarItems"

function NavBar() {
  return (
    <div className="flex justify-center gap-20 dark:bg-gray-700 bg-red-200 p-4 transition-colors duration-150">
        <NavBarItems title="Trending" param="fetchTrending"/>
        <NavBarItems title="Top Rated" param="fetchTopRated"/>
    </div>
  )
}

export default NavBar