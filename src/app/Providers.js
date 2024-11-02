'use client';
import { ThemeProvider} from "next-themes"

function Providers({children}) {
    
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="dark:bg-gray-800 dark:text-gray-100 bg-gray-100 text-gray-800 transition-colors duration-500 min-h-screen select-none">
        {children}
      </div>
    </ThemeProvider>
  )
}

export default Providers