/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 * @format
 */

import type {AppState} from './types';

export default function getCurrentExecutorId(state: AppState): ?string {
  let {currentExecutorId} = state;
  if (currentExecutorId == null) {
    const firstExecutor = Array.from(state.executors.values())[0];
    currentExecutorId = firstExecutor && firstExecutor.id;
  }
  return currentExecutorId;
}
