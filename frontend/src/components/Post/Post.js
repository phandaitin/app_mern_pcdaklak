import React from 'react'
import { Table } from 'react-bootstrap'
import Sidebar from '../Sidebar'

export default function Post() {
    return (<>
        <Sidebar />
        <Table striped bordered hover size="md">

            <thead>
                <tr className='text-center' style={{ background: '#3cc' }} >
                    <th>#</th>
                    <th>Category</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th className='text-center' >User</th>
                    <th className='text-center' >CreatedAt</th>
                    <th className='text-center' >Action</th>
                </tr>
            </thead>

            <tbody>
                {/* //{posts.slice(0,2).map((post) ...=> slice(0,2) -> Laays 2 film
                {posts.map((post) => (
                    <tr key={post._id}>
                        <PostItem post={post} />
                    </tr>
                ))}
                 */}
            </tbody>
        </Table>
    </>)
}
