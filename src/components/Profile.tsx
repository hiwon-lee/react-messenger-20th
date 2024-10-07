import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@redux/store';
import { setUser } from '@redux/userSlice';

import Button from './Button';
import { useEffect } from 'react';

export default function Profile() {
  // TODO : 이름 바꾸기
  const currUser = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(currUser.profileImg);
    return;
  });

  const toggleProfile = (id: string) => {
    // console.log(id);
    const tmpId = id === 'abc' ? 'ccc' : 'abc';
    // console.log(tmpId);
    dispatch(setUser(tmpId));
    console.log(currUser.profileImg);
  };
  return (
    <div
      className="rounded-full w-8 h-8
 bg-pink-light text-pink-dark flex items-center justify-center 
"
    >
      {currUser.profileImg ? (
        <Button
          onClick={() => toggleProfile(currUser._id)}
          src={currUser.profileImg}
          type="button"
        />
      ) : (
        <Button
          onClick={() => toggleProfile(currUser._id)}
          children={currUser.name.charAt(0)}
          type="button"
        />
      )}
    </div>
  );
}
