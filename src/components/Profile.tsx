import { useDispatch, useSelector } from 'react-redux';
import { toggleUser } from '@redux/userSlice';

import Button from './Button';
import { UserInterface } from '@interface/UserInterface';
import { RootState } from '@redux/store';

export default function Profile({ profileImg, userName }: UserInterface) {
  return (
    <div className="rounded-full w-8 h-8 bg-pink-light text-pink-dark flex items-center justify-center">
      {profileImg ? (
        <Button
          src={profileImg}
          type="button"
        />
      ) : (
        <Button
          children={userName.charAt(0)}
          type="button"
        />
      )}
    </div>
  );
}
