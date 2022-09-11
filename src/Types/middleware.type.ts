import { MiddlewareAPI, Dispatch, AnyAction } from 'redux';

export interface MiddlewareType<
	DispatchExt = {},
	S = any,
	D extends Dispatch = Dispatch
> {
	(api: MiddlewareAPI<D, S>): (next: Dispatch<AnyAction>) => (action: any) => any;
}
