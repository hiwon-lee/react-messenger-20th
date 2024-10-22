import styled from 'styled-components';
import { MainButton } from './Button';
import { ChatInterface, ReceiverState } from '@interface/ChatInterface';

export default function MemberListItem(user: ReceiverState) {
  return (
    <StyledList>
      {user.profileImg ? (
        <MainButton
          src={user.profileImg}
          type="button"
        />
      ) : (
        <MainButton
          children={user.name.charAt(0)}
          type="button"
        />
      )}
      <div className="w-full flex gap-1 border-b-[1px] border-solid border-gray-100 ">
        <div className="flex flex-col gap-1 grow mb-4">
          <div>{user.name}</div>
          <div className="text-body text-gray-500">
            {user.lastMessage ? user.lastMessage : ''}
          </div>
        </div>
        <div className="text-caption text-gray-500">{user.lastTimeStamp}</div>
      </div>
    </StyledList>
  );
}

const StyledList = styled.div`
  display: flex;
  margin: 1rem 1rem 0 1rem;
  gap: 1rem;
`;
