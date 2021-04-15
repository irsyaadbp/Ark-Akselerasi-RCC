import { Component } from "react";
import { Link } from "react-router-dom";
import { Table } from "antd";
import api from "../helper/api";

// const dataSource = [
//   {
//     id: 1,
//     name: "Rick Sanchez",
//     status: "Alive",
//     species: "Human",
//     gender: "Male",
//     image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
//   },
//   {
//     id: 2,
//     name: "Morty Smith",
//     status: "Alive",
//     species: "Human",
//     gender: "Male",
//     image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
//   },
// ];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
    render: (text, record, index) => {
      return (
        <img src={text} alt={record.name} style={{ width: 80, height: 80 }} />
      );
    },
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (text, record, index) => {
      return (
        <div>
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: 8,
              display: "inline-block",
              backgroundColor: text === "Alive" ? "green" : "red",
            }}
          />{" "}
          {text}
        </div>
      );
    },
  },
  { title: "Gender", dataIndex: "gender", key: "gender" },
  { title: "Species", dataIndex: "species", key: "species" },
];

class Pagination extends Component {
  state = {
    loading: true,
    data: [],
    pagination: {
      current: 1,
      pageSize: 20,
      total: 0,
    },
  };

  componentDidMount() {
    this.getData();
  }

  getData = async (page = 1) => {
    try {
      this.setState({ loading: true });
      const resp = await api.get("character", { params: { page } });

      console.log(resp.data);

      this.setState({
        data: resp.data.results,
        pagination: {
          current: page,
          pageSize: 20,
          total: resp.data.info.count,
        },
      });
    } catch (error) {
      console.log(error.message);
    } finally {
      this.setState({ loading: false });
    }
  };

  handleTableChange = (pagination, filters, sorter) => {
    //   pagination => {current: , pageSize: 20, total: 671}
    this.getData(pagination.current);
  };

  render() {
    return (
      <div style={{ padding: 12 }}>
        <p>Pagination</p>

        {/* {this.state.loading ? (
          "Loading..."
        ) : ( */}
        <Table
          dataSource={this.state.data}
          columns={columns}
          rowKey="id"
          onChange={this.handleTableChange}
          pagination={this.state.pagination}
          loading={this.state.loading}
        />
        {/* )} */}

        <div>
          <Link to="/">Go to home</Link>
        </div>
      </div>
    );
  }
}

export default Pagination;
