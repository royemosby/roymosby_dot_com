export default function Links({links, name}){
  return(
    <ul>
      {links.blog && <li><a href={links.blog}>Read more about {name} on my blog</a></li>}
      {links.demo && <li><a href={links.demo}>Project Demo</a></li>}
      {links.repo && <li><a href={links.repo}>GitHub Repo</a></li>}
    </ul>
  )
}