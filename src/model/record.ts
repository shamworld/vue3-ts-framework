/*
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-08-19 17:51:51
 * @LastEditors: Roy
 * @LastEditTime: 2021-08-27 10:52:41
 * @Deprecated: 否
 * @FilePath: /WKEX/src/model/record.ts
 */
export interface ListProps {
    loading: boolean;
    pageNumber: number;
    totalPage: number;
    finished: boolean;
}

export interface PageData<T> {
    current_page: number;
    data: T;
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    next_page_url?: string;
    path: string;
    per_page: number;
    prev_page_url?: string;
    to: number;
    total: number;

}
