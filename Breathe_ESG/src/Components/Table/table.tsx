// // interface DataType {
// //     key: React.Key;
// //     assessment_title: string;
// //     type: string;
// //     no_of_suppliers: number;
// //     score?: number | string;
// //   }

// //   const columns: TableColumnsType<DataType> = [
// //     {
// //       title: "ASSESSMENT TITLE",
// //       dataIndex: "assessment_title",
// //       render: (text: string) => <a>{text}</a>,
// //     },
// //     {
// //       title: "TYPE",
// //       dataIndex: "type",
// //     },
// //     {
// //       title: "NO. OF SUPPLIERS",
// //       dataIndex: "no_of_suppliers",
// //     },
// //     {
// //       title: "SCORE",
// //       dataIndex: "score",
// //     },
// //   ];

// //   const data: DataType[] = [
// //     {
// //       key: "1",
// //       assessment_title: "Assessment 1",
// //       type: "BRSR",
// //       no_of_suppliers: 20,
// //       score: "-",
// //     },
// //     {
// //       key: "2",
// //       assessment_title: "Assessment 2",
// //       type: "BRSR",
// //       no_of_suppliers: 25,
// //       score: 98,
// //     },
// //     {
// //       key: "3",
// //       assessment_title: "Assessment 3",
// //       type: "BRSR",
// //       no_of_suppliers: 35,
// //       score: 98,
// //     },
// //     {
// //       key: "4",
// //       assessment_title: "Assessment 3",
// //       type: "Custom",
// //       no_of_suppliers: 49,
// //       score: 23,
// //     },
// //     {
// //       key: "5",
// //       assessment_title: "Assessment 3",
// //       type: "Custom",
// //       no_of_suppliers: 100,
// //       score: 42,
// //     },
// //   ];

// import React, { useState } from "react";
// import { Table } from "antd";
// import { TableColumnsType, TableProps, Tag } from "antd";

// type TableRowSelection<T> = TableProps<T>["rowSelection"];

// interface DataType {
//   key: React.Key;
//   assessment_title: string;
//   type: string;
//   no_of_suppliers: number;
//   score?: number | string;
//   tags: string;
// }

// const columns: TableColumnsType<DataType> = [
//   {
//     title: "ASSESSMENT TITLE",
//     dataIndex: "assessment_title",
//     render: (text: string) => <a>{text}</a>,
//   },
//   {
//     title: "TYPE",
//     dataIndex: "type",
//   },
//   {
//     title: "NO. OF SUPPLIERS",
//     dataIndex: "no_of_suppliers",
//   },
//   {
//     title: "SCORE",
//     dataIndex: "score",
//   },
//   {
//     title: "STATUS",
//     dataIndex: "status",
//     render: (tag: string) => {
//       let color = "black"; // default color
//       if (tag === "pending") {
//         color = "red";
//       } else if (tag === "accepted") {
//         color = "green";
//       }

//       return <Tag style={{ color }}>{tag.toUpperCase()}</Tag>;
//     },
//   },
// ];

// const data: DataType[] = [
//   {
//     key: "1",
//     assessment_title: "Assessment 1",
//     type: "BRSR",
//     no_of_suppliers: 20,
//     score: "-",
//     tags: "pending",
//   },
//   {
//     key: "2",
//     assessment_title: "Assessment 2",
//     type: "BRSR",
//     no_of_suppliers: 25,
//     score: 98,
//     tags: "accepted",
//   },
//   {
//     key: "3",
//     assessment_title: "Assessment 3",
//     type: "BRSR",
//     no_of_suppliers: 35,
//     score: 98,
//     tags: "accepted",
//   },
//   {
//     key: "4",
//     assessment_title: "Assessment 3",
//     type: "Custom",
//     no_of_suppliers: 49,
//     score: 23,
//     tags: "accepted",
//   },
//   {
//     key: "5",
//     assessment_title: "Assessment 3",
//     type: "Custom",
//     no_of_suppliers: 100,
//     score: 42,
//     tags: "accepted",
//   },
// ];

// const App: React.FC = () => {
//   const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

//   const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
//     console.log("selectedRowKeys changed: ", newSelectedRowKeys);
//     setSelectedRowKeys(newSelectedRowKeys);
//   };

//   const rowSelection: TableRowSelection<DataType> = {
//     selectedRowKeys,
//     onChange: onSelectChange,
//     selections: [
//       Table.SELECTION_ALL,
//       Table.SELECTION_INVERT,
//       Table.SELECTION_NONE,
//       {
//         key: "odd",
//         text: "Select Odd Row",
//         onSelect: (changeableRowKeys) => {
//           let newSelectedRowKeys = [];
//           newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
//             if (index % 2 !== 0) {
//               return false;
//             }
//             return true;
//           });
//           setSelectedRowKeys(newSelectedRowKeys);
//         },
//       },
//       {
//         key: "even",
//         text: "Select Even Row",
//         onSelect: (changeableRowKeys) => {
//           let newSelectedRowKeys = [];
//           newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
//             if (index % 2 !== 0) {
//               return true;
//             }
//             return false;
//           });
//           setSelectedRowKeys(newSelectedRowKeys);
//         },
//       },
//     ],
//   };

//   return (
//     <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
//   );
// };

// export default App;
import React, { useState } from "react";
import { Table } from "antd";
import { TableColumnsType, TableProps, Tag } from "antd";

type TableRowSelection<T> = TableProps<T>["rowSelection"];

interface DataType {
  key: React.Key;
  assessment_title: string;
  type: string;
  no_of_suppliers: number;
  score?: number | string;
  status: string;
  result: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "ASSESSMENT TITLE",
    dataIndex: "assessment_title",
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: "TYPE",
    dataIndex: "type",
  },
  {
    title: "NO. OF SUPPLIERS",
    dataIndex: "no_of_suppliers",
  },
  {
    title: "SCORE",
    dataIndex: "score",
  },
  {
    title: "STATUS",
    dataIndex: "status",
    render: (tag: string) => {
      let background = "white";
      let color = "white"; // default color
      if (tag === "pending") {
        background = "#F04F6D33";
        color = "red";
      } else if (tag === "accepted") {
        background = "#2E984433";
        color = "green";
      }

      return <Tag style={{ background, color }}>{tag.toUpperCase()}</Tag>;
    },
  },
  {
    title: "RESULT",
    dataIndex: "result",
    render: (text: string) => <a style={{ color: "#4FA556" }}>{text}</a>,
  },
];

const data: DataType[] = [
  {
    key: "1",
    assessment_title: "Assessment 1",
    type: "BRSR",
    no_of_suppliers: 20,
    score: "-",
    status: "pending",
    result: "-",
  },
  {
    key: "2",
    assessment_title: "Assessment 2",
    type: "BRSR",
    no_of_suppliers: 25,
    score: 98,
    status: "accepted",
    result: "View",
  },
  {
    key: "3",
    assessment_title: "Assessment 3",
    type: "BRSR",
    no_of_suppliers: 35,
    score: 98,
    status: "accepted",
    result: "View",
  },
  {
    key: "4",
    assessment_title: "Assessment 3",
    type: "Custom",
    no_of_suppliers: 49,
    score: 23,
    status: "accepted",
    result: "View",
  },
  {
    key: "5",
    assessment_title: "Assessment 3",
    type: "Custom",
    no_of_suppliers: 100,
    score: 42,
    status: "accepted",
    result: "View",
  },
];

const App: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };

  return (
    <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
  );
};

export default App;
