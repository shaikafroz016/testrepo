using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BackendAPI.Migrations
{
    public partial class client : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Clients",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    client_name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    code = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Clients", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "inv_Deliveries",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    instr_level = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    agency_code = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    s_id = table.Column<int>(type: "int", nullable: false),
                    contact_name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    glob = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    desc = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    updated_by = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    updated_on = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_inv_Deliveries", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "client_Inv_Dels",
                columns: table => new
                {
                    ClientId = table.Column<int>(type: "int", nullable: false),
                    inv_deliveryId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_client_Inv_Dels", x => new { x.inv_deliveryId, x.ClientId });
                    table.ForeignKey(
                        name: "FK_client_Inv_Dels_Clients_ClientId",
                        column: x => x.ClientId,
                        principalTable: "Clients",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_client_Inv_Dels_inv_Deliveries_inv_deliveryId",
                        column: x => x.inv_deliveryId,
                        principalTable: "inv_Deliveries",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_client_Inv_Dels_ClientId",
                table: "client_Inv_Dels",
                column: "ClientId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "client_Inv_Dels");

            migrationBuilder.DropTable(
                name: "Clients");

            migrationBuilder.DropTable(
                name: "inv_Deliveries");
        }
    }
}
