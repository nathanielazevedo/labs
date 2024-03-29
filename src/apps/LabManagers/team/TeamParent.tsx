import React, { useState } from 'react';
import PageHeader from '../../../components/PageHeader';
import Tabs from '../../../components/Tabs';
import FormDialog from '../../../components/FormDialog';

function TeamParent({ noAuth = false }: { noAuth?: boolean }) {
  const [showAddMemberForm, setShowAddMemberForm] = useState<boolean>(false);

  const onAction = (action: string) => {
    setShowAddMemberForm(!showAddMemberForm);
  };

  const closeForm = () => {
    setShowAddMemberForm(!showAddMemberForm);
  };

  return (
    <>
      <PageHeader
        title='Team'
        button={noAuth ? false : true}
        onAction={onAction}
        buttonText='Add Member'
      />
      <Tabs noAuth={noAuth} />
      {showAddMemberForm && <FormDialog close={closeForm} />}
    </>
  );
}

export default TeamParent;
