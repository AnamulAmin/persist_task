import { useState } from "react";
import { Modal, Table, Button } from "flowbite-react";
import { CheckIcon, PlusIcon } from "@heroicons/react/24/solid";
import ChallengersForm from "./ChallengersForm";

export default function ChallengersDash() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [entries, setEntries] = useState([
    {
      id: 1,
      title: "Project Alpha",
      image: "https://via.placeholder.com/50",
      deadline: "2024-03-15",
    },
    {
      id: 2,
      title: "Marketing Campaign",
      image: "https://via.placeholder.com/50",
      deadline: "2024-03-20",
    },
  ]);

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6 bg-gray-50 p-4 rounded-lg">
        <h1 className="text-2xl font-bold text-gray-800">Content Management</h1>
        <Button onClick={() => setIsModalOpen(true)}>
          <PlusIcon className="h-5 w-5 mr-2" />
          Add New Entry
        </Button>
      </div>

      {/* Add Entry Modal */}
      <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Modal.Header>Add New Content</Modal.Header>
        <Modal.Body>
          <ChallengersForm />
        </Modal.Body>
      </Modal>

      {/* Content Table */}
      <div className="overflow-x-auto rounded-lg border">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Image</Table.HeadCell>
            <Table.HeadCell>Title</Table.HeadCell>
            <Table.HeadCell>Deadline Date</Table.HeadCell>
            <Table.HeadCell>Approve</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {entries.map((entry) => (
              <Table.Row key={entry.id} className="bg-white">
                <Table.Cell>
                  <img
                    src={entry.image}
                    alt={entry.title}
                    className="h-10 w-10 rounded object-cover"
                  />
                </Table.Cell>
                <Table.Cell className="font-medium text-gray-900">
                  {entry.title}
                </Table.Cell>
                <Table.Cell>{entry.deadline}</Table.Cell>
                <Table.Cell>
                  <Button color="success" pill>
                    <CheckIcon className="h-5 w-5" />
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
