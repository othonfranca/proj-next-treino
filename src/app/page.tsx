import { UserType } from '@/interface/UserType';
import Image from 'next/image'


export default async function Home() {
  const user = await fetch('https://dummyjson.com/users/2')
    .then(res => res.json())
    .then((data) => {
      return data as UserType
    });
  return <div><p>{user.firstName}</p><p>{user.company.name}</p></div>
}
