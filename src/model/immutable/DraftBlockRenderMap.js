/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DraftBlockRenderMap
 * @format
 * @flow
 */

'use strict';

import type {DraftBlockRenderConfig} from 'DraftBlockRenderConfig';
import type {Map} from 'immutable';

// We should be able to be more specific on the key type
// once we upgrade to immutable v4
// https://github.com/facebook/immutable-js/issues/1371
export type DraftBlockRenderMap = Map<any, DraftBlockRenderConfig>;
