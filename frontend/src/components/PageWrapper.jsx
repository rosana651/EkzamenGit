// Принимает любой дочерний элеммент и дает ему padding (сделал, чтоб код выглядел чище)
const PageWrapper = ({ children }) => {
  return (
    <div className='pt-24'>
      {children}
    </div>
  )
}
export default PageWrapper