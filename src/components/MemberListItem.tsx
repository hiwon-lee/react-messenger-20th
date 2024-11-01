import styled from 'styled-components';
import { MainButton, OnlineTaggedButton } from './Button';
import { ChatInterface, ReceiverState } from '@interface/ChatInterface';

export default function ListItem(user: ReceiverState) {
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
      <div className="grow flex gap-1 border-solid border-b-[1px] border-gray-70">
        <div className="flex flex-col gap-1 grow">
          {/* 사용자 이름 */}
          <div>{user.name}</div>
          {/* item 내용 미리보기 */}
          <div className="text-body text-gray-500">
            {user.lastMessage ? user.lastMessage : ''}
          </div>
        </div>
        <div className="text-caption text-gray-500">{user.lastTimeStamp}</div>
      </div>
    </StyledList>
  );
}

export function MemberListItem(user: ReceiverState) {
  return (
    <StyledList>
      {user.profileImg ? (
        <OnlineTaggedButton
          src={user.profileImg}
          type="button"
        />
      ) : (
        <OnlineTaggedButton
          children={user.name.charAt(0)}
          type="button"
        />
      )}
      <div className="py-4 grow flex gap-1 border-solid border-b-[1px] border-gray-70">
        <div className="flex flex-col justify-center gap-1 grow pb-2">
          {/* 사용자 이름 */}
          <div className="font-subtitle">{user.name}</div>
          {/* item 내용 미리보기 */}
          {user.lastMessage && (
            <div className="text-body text-gray-500">{user.lastMessage}</div>
          )}
        </div>
        <div className="text-caption text-gray-500">{user.lastTimeStamp}</div>
      </div>
    </StyledList>
  );
}

const StyledList = styled.div`
  display: flex;
  margin: 0 1rem;
  height: 76px;
  // margin: 1rem 1rem 0 1rem;
  // padding: 0.5rem;
  gap: 1rem;
  border
`;
