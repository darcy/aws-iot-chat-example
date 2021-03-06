/*
  Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.

  Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except
  in compliance with the License. A copy of the License is located at

      http://aws.amazon.com/apache2.0/

  or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
  specific language governing permissions and limitations under the License.
*/

import React from 'react';
import { shallow } from 'enzyme';

import { RoomMenu } from '../RoomMenu';

describe('RoomMenu', () => {
  const props = {
    subscribedTopics: [
      'room/public/room1/+',
      'room/public/room2/+',
    ],
    match: {
      params: {
        roomType: 'public',
        roomName: 'room1',
      },
    },
  };
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<RoomMenu {...props} />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });
});
